import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import './MainDashboard.css';
import { recommendations } from './recommendations';

function MainDashboard({ vibe }) {
  const [weatherData, setWeatherData] = useState(null);
  const [manualLocation, setManualLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (vibe) {
      console.log(`Selected vibe: ${vibe}`); // Confirm that the vibe is passed
    }
  }, [vibe]);

  const fetchWeatherByManualLocation = async () => {
    if (!manualLocation) {
      setError('Please enter a location.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

      if (!apiKey) {
        setError(
          'API key is missing. Please set REACT_APP_WEATHER_API_KEY in your environment variables.'
        );
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
          manualLocation
        )}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const getLifeHackRecommendation = () => {
    if (!weatherData) return '';

    const temp = weatherData.current.temp_f;
    const timeOfDay = new Date().getHours() < 12 ? 'morning' : (new Date().getHours() < 18 ? 'afternoon' : 'evening');

    let tempCategory = '';
    if (temp <= 50) {
      tempCategory = 'cold';
    } else if (temp > 50 && temp <= 68) {
      tempCategory = 'cool';
    } else {
      tempCategory = 'warm';
    }

    const recommendation = recommendations[tempCategory]?.[timeOfDay] || 'Here’s a useful tip based on today’s weather!';

    return recommendation;
  };

  const getTaskSuggestion = () => {
    const taskSuggestions = {
      relaxed: 'Take a break and read a book or listen to calming music.',
      productive: 'Start your to-do list! Focus on the most important tasks first.',
      adventurous: 'Try something new today! Maybe explore a new hobby or take a walk in a new neighborhood.'
    };

    return taskSuggestions[vibe] || 'Choose a vibe to get task suggestions!';
  };

  return (
    <div className="dashboard">
      <h1>Life Hacks for Today</h1>
      {!weatherData && (
        <div>
          <p>Please enter your location:</p>
          <input
            type="text"
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
            placeholder="Enter city or ZIP code"
          />
          <button onClick={fetchWeatherByManualLocation}>Submit</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
      {loading && <p>Loading weather data...</p>}
      {weatherData && (
        <>
          <div className="weather-info">
            <p>
              <strong>Location:</strong> {weatherData.location.name},{' '}
              {weatherData.location.country}
            </p>
            <p>
              <strong>Temperature:</strong> {weatherData.current.temp_f}°F
            </p>
            <p>
              <strong>Condition:</strong> {weatherData.current.condition.text}
            </p>
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
              className="weather-icon"
            />
          </div>
          <Avatar weatherData={weatherData} />
          <div className="life-hack-recommendation">
            <p>
              <strong>Life Hack Recommendation:</strong>
            </p>
            <p>{getLifeHackRecommendation()}</p>
          </div>
          <div className="task-suggestion">
            <p>
              <strong>Task Suggestion:</strong>
            </p>
            <p>{getTaskSuggestion()}</p>
          </div>
          <button
            onClick={() => {
              setWeatherData(null);
              setManualLocation('');
              setError(null);
            }}
          >
            Search Another Location
          </button>
        </>
      )}
    </div>
  );
}

export default MainDashboard;
