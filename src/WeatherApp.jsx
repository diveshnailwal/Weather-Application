import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weather, setWeather] = useState({
        name: "Delhi",
        feels: 30.24,
        humidity: 54,
        max: 29.05,
        min: 29.05,
        temp: 29.05,
        weather: "haze",
        wind: { speed: 1.54, deg: 30 },
    });

    const updateInfo = (newInfo) => {
        setWeather(newInfo);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#1976d2', marginBottom: '20px' }}>Weather App</h2>
            <SearchBox updateInfo={ updateInfo } />
            <br />
            <InfoBox info={weather} />
        </div>
    );
}
