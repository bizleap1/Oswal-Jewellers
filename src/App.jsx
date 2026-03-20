import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Wedding from './pages/Wedding';
import SilverArtifacts from './pages/SilverArtifacts';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="wedding" element={<Wedding />} />
          <Route path="silver-artifacts" element={<SilverArtifacts />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
