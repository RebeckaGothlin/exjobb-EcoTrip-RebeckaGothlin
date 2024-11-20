import {
  ParagraphText,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { Form, Input, Para } from "../components/styled/StyledForm";
import { ContentButton } from "../components/styled/StyledButtons";
import { FormEvent, useContext, useState } from "react";
// import Loader from "../components/Loader";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ThemeContext } from "../contexts/ThemeContext";
import { fetchCoordinates } from "../utils/locationUtil";
import { calculateDistance } from "../utils/distanceUtil";
import { StyledSpinner } from "../components/styled/StyledSpinner";
import { Header } from "../components/Header";

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

  const handleSubmit = (e: FormEvent) => {
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
          // <Loader size={100} />
          <StyledSpinner size={120} />
        ) : (
          <>
            <Para>{result}</Para>
            {!hasError && result && (
              <ResponsiveContainer max-width="100%" height={400}>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: theme.name === "Light" ? "white" : "black" }}
                  />
                  <YAxis
                    tick={{ fill: theme.name === "Light" ? "white" : "black" }}
                  />
                  <Tooltip
                    formatter={(value: number) => `${Math.round(value)} co2`}
                    itemStyle={{
                      fill: theme.name === "Light" ? "white" : "black",
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      color: theme.name === "Light" ? "white" : "black",
                    }}
                  />
                  <Bar dataKey="emissions" fill="#81988f" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </>
        )}
      </TextContainer>
    </>
  );
};
