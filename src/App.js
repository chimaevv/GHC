import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskVibeSelection from './TaskVibeSelection'; 
import MainDashboard from './MainDashboard';

function App() {
  const [vibe, setVibe] = useState(''); 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<TaskVibeSelection setVibe={setVibe} />} 
          />
          <Route
            path="/tasks"
            element={<MainDashboard vibe={vibe} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
