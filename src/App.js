// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenderSelection from './GenderSelection';
import StylePreference from './StylePreference';
import MainDashboard from './MainDashboard';

function App() {
  const [gender, setGender] = useState('');
  const [style, setStyle] = useState('');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<GenderSelection setGender={setGender} />}
          />
          <Route
            path="/style"
            element={<StylePreference gender={gender} setStyle={setStyle} />}
          />
          <Route
            path="/dashboard"
            element={<MainDashboard gender={gender} style={style} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;