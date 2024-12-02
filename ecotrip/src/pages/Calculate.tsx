import { useState, useContext, FormEvent } from "react";
import {
  ParagraphText,
  StyledTable,
  StyledTableDataCell,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableRow,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { Form, Input, Para } from "../components/styled/StyledForm";
import {
  ContentButton,
  HistorySaveButton,
} from "../components/styled/StyledButtons";
import { ThemeContext } from "../contexts/ThemeContext";
import { fetchCoordinates } from "../utils/locationUtil";
import { calculateDistance } from "../utils/distanceUtil";
import { StyledSpinner } from "../components/styled/StyledSpinner";
import { ResponsiveBar } from "@nivo/bar";
import { Navbar } from "../components/Navbar";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Coordinates {
  lat: number;
  lon: number;
}

interface EmissionItem {
  name: string;
  emissions: number;
}

interface Search {
  from: string;
  to: string;
  result: string;
  data: EmissionItem[];
  time: string;
}

const MapClickHandler = ({
  setFromPoint,
  setToPoint,
}: {
  setFromPoint: (coords: Coordinates) => void;
  setToPoint: (coords: Coordinates) => void;
}) => {
  const [isFrom, setIsFrom] = useState(true);

  useMapEvents({
    click(e) {
      const point = { lat: e.latlng.lat, lon: e.latlng.lng };
      if (isFrom) {
        setFromPoint(point);
        setIsFrom(false);
      } else {
        setToPoint(point);
        setIsFrom(true);
      }
    },
  });

  return null;
};

export const Calculate = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [savedFrom, setSavedFrom] = useState("");
  const [savedTo, setSavedTo] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<EmissionItem[]>([
    { name: "Car", emissions: 0 },
    { name: "Train", emissions: 0 },
    { name: "Bus", emissions: 0 },
    { name: "Plane", emissions: 0 },
  ]);
  const [hasError, setHasError] = useState(false);
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
  const [showHistory, setShowHistory] = useState(false);
  const theme = useContext(ThemeContext);
  const [fromCoords, setFromCoords] = useState<Coordinates | null>(null);
  const [toCoords, setToCoords] = useState<Coordinates | null>(null);
  const [useMap, setUseMap] = useState(false);

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const fromLocation = fromCoords || (await fetchCoordinates(from));
      const toLocation = toCoords || (await fetchCoordinates(to));

      if (fromLocation && toLocation) {
        const distance = calculateDistance(
          fromLocation.lat,
          fromLocation.lon,
          toLocation.lat,
          toLocation.lon
        );

        setData([
          { name: "Car", emissions: distance * 0.12 },
          { name: "Train", emissions: distance * 0.04 },
          { name: "Bus", emissions: distance * 0.07 },
          { name: "Plane", emissions: distance * 0.25 },
        ]);
        setResult(
          `Distance: ${distance.toFixed(0)} km`
        );
      } else {
        setResult("Coordinates are invalid.");
      }
    } catch (error) {
      console.error(error);
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

  const handleSave = () => {

    const fromLocation =
      savedFrom || (fromCoords ? `${fromCoords.lat.toFixed(3)}, ${fromCoords.lon.toFixed(3)}` : null);
    const toLocation =
      savedTo || (toCoords ? `${toCoords.lat.toFixed(3)}, ${toCoords.lon.toFixed(3)}` : null);
  
    if (!fromLocation || !toLocation) {
      alert("Please provide input via text fields or select points on the map before saving.");
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
    alert(`Saved search: from ${fromLocation} to ${toLocation}`);
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
          transportation options. Enter the name of the city you want to depart
          from and the city you want to travel to, then press the "Calculate"
          button to estimate emissions for different travel methods – plane,
          car, bus, and train.
        </ParagraphText>
        <ContentButton
          onClick={() => {
            setUseMap(!useMap);
            setResult(""); 
            setData([
              { name: "Car", emissions: 0 },
              { name: "Train", emissions: 0 },
              { name: "Bus", emissions: 0 },
              { name: "Plane", emissions: 0 },
            ]);
            setFromCoords(null); 
            setToCoords(null);
            setFrom("");
            setTo("");
            setSavedFrom("");
            setSavedTo("");
          }}
        >
          {useMap ? "Text input" : "Map"}
        </ContentButton>

        {!useMap ? (
          <Form onSubmit={handleSubmit}>
            <Para>I want to travel from:</Para>
            <Input
              type="text"
              value={from}
              placeholder="From.."
              onChange={(e) => setFrom(e.target.value)}
            />
            <Para>I want to travel to:</Para>
            <Input
              type="text"
              value={to}
              placeholder="To.."
              onChange={(e) => setTo(e.target.value)}
            />
            <ContentButton onClick={handleClick}>Calculate</ContentButton>
          </Form>
        ) : (
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
                <Marker position={[fromCoords.lat, fromCoords.lon]} />
              )}
              {toCoords && <Marker position={[toCoords.lat, toCoords.lon]} />}
            </MapContainer>

            <ContentButton onClick={handleCalculate}>Calculate</ContentButton>
          </div>
        )}
        {loading ? (
          <StyledSpinner size={120} />
        ) : (
          <>
            <Para>{result}</Para>
            {!hasError && result && (
              <>
                <div style={{ height: 400, width: "100%", marginTop: "30px" }}>
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
                <HistorySaveButton onClick={handleSave}>
                  ⭐ Save this search
                </HistorySaveButton>
              </>
            )}
          </>
        )}
        <HistorySaveButton onClick={toggleHistory}>
          {showHistory ? "Hide History" : "Show History"}
        </HistorySaveButton>
        {showHistory && (
          <>
            <StyledTable>
              <StyledTableHeader>
                <StyledTableRow>
                  <StyledTableHeaderCell>Time</StyledTableHeaderCell>
                  <StyledTableHeaderCell>From</StyledTableHeaderCell>
                  <StyledTableHeaderCell>To</StyledTableHeaderCell>
                  <StyledTableHeaderCell>Distance</StyledTableHeaderCell>
                  <StyledTableHeaderCell>Emissions</StyledTableHeaderCell>
                </StyledTableRow>
              </StyledTableHeader>
              <tbody>
                {savedSearches.map((search: Search, index: number) => (
                  <StyledTableRow key={index}>
                    <StyledTableDataCell>{search.time}</StyledTableDataCell>
                    <StyledTableDataCell>{search.from}</StyledTableDataCell>
                    <StyledTableDataCell>{search.to}</StyledTableDataCell>
                    <StyledTableDataCell>{search.result}</StyledTableDataCell>
                    <StyledTableDataCell>
                      {(search.data || [])
                        .map(
                          (item: EmissionItem) =>
                            `${item.name}: ${item.emissions.toFixed(0)} kg`
                        )
                        .join(", ")}
                    </StyledTableDataCell>
                  </StyledTableRow>
                ))}
              </tbody>
            </StyledTable>
            <HistorySaveButton onClick={handleClearHistory}>
              ❌ Clear History
            </HistorySaveButton>
          </>
        )}
      </TextContainer>
    </>
  );
};
