// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Navigation from '../src/components/Header/Navigation';
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<about />} />
          <Route path="/portfolio" element={<portfolio />} />
          <Route path="/contact" element={<contact />} />
          <Route path="/resume" element={<resume />} />
          <Route path="/" element={<home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
