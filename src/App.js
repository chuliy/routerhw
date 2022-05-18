import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import '../src/App.css'
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div>
        <div className="header">
          <div className="headerElement">
           <Link to="/" className="link">Home</Link>
          </div>
          <div className="headerElement">
            <Link to="/about" className="link">About</Link>
          </div>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}



export default App;