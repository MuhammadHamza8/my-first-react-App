import './App.css';
import React from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Navbar from './components/Navbar'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="main">
        <h2 className="main-header">My First React App</h2>
        <div>


          <Routes>
          <Route exact path='/home' element={<Home/>} /> 
          <Route exact path='/create' element={<Create/>} /> 
          <Route exact path='/read' element={<Read/>} /> 
          <Route exact path='/update' element={<Update/>} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


