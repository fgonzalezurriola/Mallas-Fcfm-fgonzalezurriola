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
        <Route path="/malla/industrial" element={<CurriculumGrid />} />
        <Route path="/malla/electrica" element={<CurriculumGrid />} />
        {/* <Route path="/malla/quimica" element={<CurriculumGrid />} />
        <Route path="/malla/geologia" element={<CurriculumGrid />} />
        <Route path="/malla/geofisica" element={<CurriculumGrid />} />
        <Route path="/malla/civil1" element={<CurriculumGrid />} />
        <Route path="/malla/civil2" element={<CurriculumGrid />} />
        <Route path="/malla/civil3" element={<CurriculumGrid />} /> */}
        <Route path="/malla/mecanica" element={<CurriculumGrid />} />
        <Route path="/malla/matematica" element={<CurriculumGrid />} />
        <Route path="/malla/fisica" element={<CurriculumGrid />} />
        <Route path="/malla/astronomia" element={<CurriculumGrid />} />
      </Routes>
    </Router>
  );
}

export default App;