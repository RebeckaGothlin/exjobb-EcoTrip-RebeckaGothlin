import { useState, useContext, FormEvent, useEffect } from "react";
import {
  ParagraphText,
  SearchContainer,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { Form, Input, Para } from "../components/styled/StyledForm";
import {
  CalculateButton,
  HistoryButton,
  HistorySaveButton,
  HistorySaveButtonMap,
} from "../components/styled/StyledButtons";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  fetchCityFromCoordinates,
  fetchCoordinates,
} from "../service/fetchCoordinates";
import { calculateDistance } from "../service/distanceUtil";
import { StyledSpinner } from "../components/styled/StyledSpinner";
import { ResponsiveBar } from "@nivo/bar";
import { Navbar } from "../components/Navbar";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Coordinates, MapClickHandler } from "../components/MapClickHandler";
import { EmissionItem, Search } from "../models/types";
import { customIcon } from "../icons/icon";
// import { MdOutlineTextFields } from "react-icons/md";
// import { IoMdPin } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoBookmarksOutline} from "react-icons/io5";
// import { RxInput } from "react-icons/rx";
import { calculateEmissions } from "../components/calculateEmissions";
import { TabNavigate } from "../components/TabNavigate";
import { HistoryModal } from "../components/HistoryModal";
// import { IoMdCloseCircle } from "react-icons/io";

export const Calculate = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [savedFrom, setSavedFrom] = useState("");
  const [savedTo, setSavedTo] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const theme = useContext(ThemeContext);
  const [fromCoords, setFromCoords] = useState<Coordinates | null>(null);
  const [toCoords, setToCoords] = useState<Coordinates | null>(null);
  // const [useMap, setUseMap] = useState(false);
  const [activeTab, setActiveTab] = useState<"map" | "input">("input");
  const [graphVisible, setGraphVisible] = useState(false);
  const [data, setData] = useState<EmissionItem[]>([
    { name: "Car", emissions: 0 },
    { name: "Train", emissions: 0 },
    { name: "Bus", emissions: 0 },
    { name: "Plane", emissions: 0 },
  ]);
  const [savedSearches, setSavedSearches] = useState<Search[]>(
    JSON.parse(localStorage.getItem("savedSearches") || "[]").map(
      (search: Partial<Search>) => ({
        time: search.time || "",
        from: search.from || "",
        to: search.to || "",
        result: search.result || "",
        data: search.data || [],
      })
    )
  );

  const resetCoordinates = () => {
    setFromCoords(null);
    setToCoords(null);
  };

  useEffect(() => {
    if (activeTab === "map") {
      resetCoordinates();
    }

    setFrom("");
    setTo("");
    setResult("");
    setData([
      { name: "Car", emissions: 0 },
      { name: "Train", emissions: 0 },
      { name: "Bus", emissions: 0 },
      { name: "Plane", emissions: 0 },
    ]);
    setFromCoords(null);
    setToCoords(null);
    setGraphVisible(false);
  }, [activeTab]);

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const { data, distance, fromCity, toCity } = await calculateEmissions(
        from,
        to,
        fromCoords,
        toCoords
      );
      setData(data);
      setResult(
        `Distance from ${fromCity} to ${toCity}: ${distance.toFixed(0)} km`
      );
      setGraphVisible(true);
    } catch (error) {
      console.error(
        "Error fetching coordinates or calculating distance:",
        error
      );
      setResult("An error occurred. Please check input or map.");
    } finally {
      setLoading(false);
    }
  };

  const scrollDown = () => {
    window.scrollBy({
      top: 100,
      behavior: "smooth",
    });
  };

  const handleClick = async () => {
    setLoading(true);
    setHasError(false);
    scrollDown();
    try {
      // Hämta koordinater (latitud och longitud) för både "from" och "to"-städerna
      const fromCoords = await fetchCoordinates(from);
      const toCoords = await fetchCoordinates(to);
      // Beräkna avståndet mellan de två punkterna genom att använda haversine-formeln
      const distance = calculateDistance(
        fromCoords.lat,
        fromCoords.lon,
        toCoords.lat,
        toCoords.lon
      );
      // Uppdatera data med koldioxidutsläpp för olika transportmedel baserat på avståndet
      setData([
        { name: "Car", emissions: distance * 0.12 },
        { name: "Train", emissions: distance * 0.04 },
        { name: "Bus", emissions: distance * 0.07 },
        { name: "Plane", emissions: distance * 0.25 },
      ]);

      setResult(
        `Distance between ${from} and ${to}: ${distance.toFixed(0)} km`
      );
      setSavedFrom(from);
      setSavedTo(to);
      setGraphVisible(true);
    } catch (error) {
      console.error(
        "Error fetching coordinates or calculating distance:",
        error
      );
      setResult("An error occurred. Please check spelling.");
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const fromLocation = fromCoords
        ? await fetchCityFromCoordinates(fromCoords.lat, fromCoords.lon)
        : savedFrom;
      const toLocation = toCoords
        ? await fetchCityFromCoordinates(toCoords.lat, toCoords.lon)
        : savedTo;

      if (!fromLocation || !toLocation) {
        alert(
          "Please provide input via text fields or select points on the map before saving."
        );
        return;
      }

      const currentTime = new Date().toLocaleString();
      const newSearch: Search = {
        from: fromLocation,
        to: toLocation,
        result,
        data: data || [],
        time: currentTime,
      };

      const updatedSearches = [...savedSearches, newSearch];
      setSavedSearches(updatedSearches);
      localStorage.setItem("savedSearches", JSON.stringify(updatedSearches));

      if (!showHistory) {
        setShowHistory(true);
        setTimeout(() => {
          const table = document.getElementById("history-table");
          table?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const table = document.getElementById("history-table");
        if (table) {
          void table.offsetWidth;
        }
        table?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error saving search with city names:", error);
      alert("Failed to fetch city names. Please try again.");
    }
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    handleClick();
    setFrom("");
    setTo("");
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleClearHistory = () => {
    setSavedSearches([]);
    localStorage.removeItem("savedSearches");
  };

  return (
    <>
      <Navbar />
      <TextContainer>
        <TextTitle>Calculate</TextTitle>
        <ParagraphText>
          Here you can calculate the carbon dioxide emissions from different
          transportation options. You can either enter the name of the city you
          want to depart from and the city you want to travel to, or select
          locations directly on the map. Then press the "Calculate" button to
          estimate emissions for different travel methods – plane, car, bus, and
          train.
        </ParagraphText>
        <SearchContainer>
          <TabNavigate activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "input" ? (
            <Form onSubmit={handleSubmit}>
              {/* <Para>I want to travel from:</Para> */}
              <Input
                type="text"
                value={from}
                placeholder="From.."
                onChange={(e) => setFrom(e.target.value)}
              />
              {/* <Para>I want to travel to:</Para> */}
              <Input
                type="text"
                value={to}
                placeholder="To.."
                onChange={(e) => setTo(e.target.value)}
              />
              <CalculateButton
                onClick={handleClick}
                aria-label="Calculate emissions"
              >
                Calculate
              </CalculateButton>
              <HistorySaveButton
                onClick={toggleHistory}
                aria-label="Show saved searches"
                tabIndex={0}
              >
                <IoBookmarksOutline size="25px" title="Show saved searches" />
              </HistorySaveButton>
            </Form>
          ) : (
            <>
              <div style={{ marginBottom: "20px", height: "500px" }}>
                <MapContainer
                  style={{ height: "500px", width: "100%" }}
                  center={[40, 20]}
                  zoom={2}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  <MapClickHandler
                    setFromPoint={setFromCoords}
                    setToPoint={setToCoords}
                  />
                  {fromCoords && (
                    <Marker
                      position={[fromCoords.lat, fromCoords.lon]}
                      icon={customIcon}
                    />
                  )}
                  {toCoords && (
                    <Marker
                      position={[toCoords.lat, toCoords.lon]}
                      icon={customIcon}
                    />
                  )}
                </MapContainer>
                <CalculateButton
                  onClick={handleCalculate}
                  aria-label="Calculate emissions from map locations"
                >
                  Calculate
                </CalculateButton>
              </div>
              <HistorySaveButtonMap
                onClick={toggleHistory}
                aria-label="Show saved searches"
                tabIndex={0}
              >
                {/* {showHistory ? "Hide saved searches" : "Show saved searches"} */}
                <IoBookmarksOutline size="25px" title="Show saved searches" />
              </HistorySaveButtonMap>
            </>
          )}
        </SearchContainer>
        {loading ? (
          <StyledSpinner size={120} />
        ) : (
          <>
            <Para>{result}</Para>
            {!loading &&
              !hasError &&
              result &&
              data &&
              data.length > 0 &&
              graphVisible && (
                <>
                  <div
                    style={{ height: 400, width: "100%", marginTop: "30px" }}
                  >
                    <ResponsiveBar
                      data={data.map((item) => ({
                        transport: item.name,
                        emissions: item.emissions,
                      }))}
                      keys={["emissions"]}
                      indexBy="transport"
                      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: "linear" }}
                      indexScale={{ type: "band", round: true }}
                      colors="url(#barGradient)"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Transportation",
                        legendPosition: "middle",
                        legendOffset: 32,
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Emissions (kg)",
                        legendPosition: "middle",
                        legendOffset: -40,
                      }}
                      theme={{
                        axis: {
                          ticks: {
                            line: {
                              stroke: theme.name === "Dark" ? "white" : "black",
                            },
                            text: {
                              fill: theme.name === "Dark" ? "white" : "black",
                            },
                          },
                          domain: {
                            line: {
                              stroke: theme.name === "Dark" ? "white" : "black",
                            },
                          },
                        },
                        labels: {
                          text: {
                            fill: theme.name === "Dark" ? "white" : "black",
                          },
                        },
                        legends: {
                          text: {
                            fill: theme.name === "Dark" ? "white" : "black",
                          },
                        },
                        tooltip: {
                          container: {
                            display: "none",
                          },
                        },
                      }}
                      label={(d) => (d.value ? `${d.value.toFixed(0)} kg` : "")}
                    />
                    <svg style={{ height: 0 }}>
                      <defs>
                        <linearGradient
                          id="barGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#ff7e5f" />
                          <stop offset="100%" stopColor="#feb47b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <HistoryButton
                    onClick={handleSave}
                    aria-label="Save this search"
                    tabIndex={0}
                  >
                    <CiBookmark size="25px" title="Save this search" />
                  </HistoryButton>
                </>
              )}
          </>
        )}
        {showHistory && (
            <HistoryModal
            savedSearches={savedSearches}
            onClose={() => setShowHistory(false)}
            onClearHistory={handleClearHistory}
          />
        )}
      </TextContainer>
    </>
  );
};
