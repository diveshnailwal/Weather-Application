import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import "./infobox.css";

export default function InfoBox({ info }) {
    if (!info) return null; // In case info is empty, render nothing

    return (
        <div className="infobox" style={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Weather Information
            </Typography>
            <Box 
                sx={{ 
                    minWidth: 200, 
                    maxWidth: 300, 
                    mx: "auto", 
                    border: 2, 
                    borderRadius: 2, 
                    padding: 2, 
                    boxShadow: 3 
                }}
            >
               
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {info.name}
                        </Typography>
                        <Typography color="text.secondary">
                            {info.weather.toUpperCase()} - Feels like {info.feels}°C
                        </Typography>
                        <Typography color="text.secondary">
                            Humidity: {info.humidity}%
                        </Typography>
                        <Typography color="text.secondary">
                            Temperature: Max {info.max}°C, Min {info.min}°C
                        </Typography>
                        <Typography color="text.secondary">
                            Wind Speed: {info.wind.speed} m/s at {info.wind.deg}°
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}
