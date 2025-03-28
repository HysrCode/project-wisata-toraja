// import React from 'react'
import Home from "./Pages/Homes/Homes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Places from "./Pages/Places/Places";
import Destination from "./Pages/Destination/Destination";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Details from "./Pages/Destination/Destination";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* Route ke halaman utama */}
          <Route path="/" element={<Home />} />
          <Route path="/tujuan" element={<Destination />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/lokasi" element={<Places />} />
          <Route path="/galeri" element={<Gallery />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
