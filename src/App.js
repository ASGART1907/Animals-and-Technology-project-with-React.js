import React from 'react';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav/>
      <Home/>
    </Router>
  )
}

export default App