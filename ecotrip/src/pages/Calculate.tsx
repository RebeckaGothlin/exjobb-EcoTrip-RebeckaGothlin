import React, { useState, useContext } from "react";
import {
  ParagraphText,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { Form, Input, Para } from "../components/styled/StyledForm";
import { ContentButton } from "../components/styled/StyledButtons";
import { ThemeContext } from "../contexts/ThemeContext";
import { fetchCoordinates } from "../utils/locationUtil";
import { calculateDistance } from "../utils/distanceUtil";
import { StyledSpinner } from "../components/styled/StyledSpinner";
import { Header } from "../components/Header";
import { ResponsiveBar } from "@nivo/bar";

export const Calculate = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    { name: "Car", emissions: 0 },
    { name: "Train", emissions: 0 },
    { name: "Bus", emissions: 0 },
    { name: "Plane", emissions: 0 },
  ]);
  const theme = useContext(ThemeContext);
  const [hasError, setHasError] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick();
    setFrom("");
    setTo("");
  };

  return (
    <>
      <Header></Header>
      <TextContainer>
        <TextTitle>Calculate</TextTitle>
        <ParagraphText>
          Here you can calculate the carbon dioxide emissions from different
          transportation options. Enter the name of the city you want to depart
          from and the city you want to travel to, then press the "Calculate"
          button to estimate emissions for different travel methods – plane,
          car, bus, and train.
        </ParagraphText>
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
        {loading ? (
          <StyledSpinner size={120} />
        ) : (
          <>
            <Para>{result}</Para>
            {!hasError && result && (
              <div style={{ height: 400, width: "100%" }}>
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
            )}
          </>
        )}
      </TextContainer>
    </>
  );
};
