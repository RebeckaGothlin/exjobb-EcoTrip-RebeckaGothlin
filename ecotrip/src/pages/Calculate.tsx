import { Header } from "../components/Header";
import {
  ParagraphText,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { Form, Input, Para } from "../components/styled/StyledForm";
import { ContentButton } from "../components/styled/StyledButtons";
import { FormEvent, useContext, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
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

// Funktion som beräknar avståndet mellan två geografiska punkter (lat/lon) genom haversine-formeln:
const calculateDistance = (
  lat1: number, // latitud för första punkten
  lon1: number, // longitud för första punkten
  lat2: number,
  lon2: number
) => {
  // konvertera grader till radians. 180 = pi radians. multiplicerar med pi/180
  const toRadians = (degree: number) => (degree * Math.PI) / 180;

  // jordens radie i kilometer (omvandlar vinklar till avstånd)
  const R = 6371;

  // skillnaden i latitud mellan de två punkterna (omvandlad till radians)
  const dLat = toRadians(lat2 - lat1);

  const dLon = toRadians(lon1 - lon2);

  // Haversine-formeln:
  // mellanberäkning som använder trigonometriska funktioner för att hantera klotets yta
  // Den tar hänsyn till både latitud- och longitudförändringar
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + // Beräkning för latitudskillnaden
    Math.cos(toRadians(lat1)) * // Multipliceras med cosinus av den första latituden
      Math.cos(toRadians(lat2)) * // Mulitpliceras med cosinus av den andra latituden
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2); // Beräkning för longitudskillnaden

  // c är en annan mellanberäkning som använder arctangentfunktionen (atan2) för att beräkna den centrala vinkeln
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // avståndet i kilometer beräknas genom att multiplicera jordens radie med den centrala vinkeln (i radians)
  return R * c; // returnera avståndet i kilometer
};

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
  console.log(theme);
  

  // funktion för att hämta koordinater för en stad från PpenStreetMap
  const fetchCoordinates = async (city: string) => {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
    );

    // Destrukturerar latitud och longitud från svaret
    const { lat, lon } = response.data[0];
    // Returnerar latitud och longitud som flyttal
    return { lat: parseFloat(lat), lon: parseFloat(lon) };
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const fromCoords = await fetchCoordinates(from);
      const toCoords = await fetchCoordinates(to);
      const distance = calculateDistance(
        fromCoords.lat,
        fromCoords.lon,
        toCoords.lat,
        toCoords.lon
      );
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
          <Loader size={100} />
        ) : (
          <>
            <Para>{result}</Para>
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
                  itemStyle={{ fill: theme.name === "Light" ? "white" : "black" }}
                />
                <Legend wrapperStyle={{ color: theme.name === "Light" ? "white" : "black" }} />
                <Bar dataKey="emissions" fill="#81988f" />
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </TextContainer>
    </>
  );
};
