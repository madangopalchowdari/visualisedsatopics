import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/Welcome';
import ArrayVisualizer from './components/BasicDataStructures/ArrayVisualizer';
import QueueVisualizer from './components/BasicDataStructures/QueueVisualizer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/array" element={<ArrayVisualizer />} />
          <Route path="/queue" element={<QueueVisualizer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
