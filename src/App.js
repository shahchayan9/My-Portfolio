import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<About />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;