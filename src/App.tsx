import React from 'react'
import {Navbar} from './components/Navbar/Navbar'
import {GlobalStyle} from "./global.elements"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
