import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hub from './components/Hub';
import CurriculumGrid from './components/CurriculumGrid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/malla/computacion" element={<CurriculumGrid />} />
        <Route path="/malla/electrica" element={<CurriculumGrid />} />
      </Routes>
    </Router>
  );
}

export default App;