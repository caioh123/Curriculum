import React from 'react'
import {Navbar} from './components/Navbar/Navbar'
import {GlobalStyle} from "./global.elements"
import {BrowserRouter as Router} from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
    </Router>
  );
}

export default App;
