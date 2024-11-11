import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./sb.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4f86448d23fceb5bbc1cab0344e11f37";

    const getInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("City not found or invalid API request.");

            const getjsonInfo = await response.json();
            console.log(getjsonInfo);

            const result = {
                name: getjsonInfo.name,
                temp: getjsonInfo.main.temp,
                max: getjsonInfo.main.temp_max,
                min: getjsonInfo.main.temp_min,
                humidity: getjsonInfo.main.humidity,
                feels: getjsonInfo.main.feels_like,
                weather: getjsonInfo.weather[0].description,
                wind: getjsonInfo.wind,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
            alert("Unable to retrieve data. Please check the city name and try again.");
            return null;
        }
    };

    const handleText = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        const newInfo = await getInfo();
        if (newInfo) updateInfo(newInfo); // Only update if data is retrieved successfully
        setCity("");
    };

    return (
        <div className="sb">
            <h2 style={{ color: '#1976d2', marginBottom: '20px' }}>Search for Weather in your city</h2>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleText} id="city" label="City Name" variant="outlined" required value={city} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
