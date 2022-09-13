import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/HomePage'

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
    
    </div>
  );
}

export default App;
