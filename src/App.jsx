// import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Portfolio from './Components/Portfolio/Portfolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'
import Subscribe from './Components/Subscribe/Subscirbe'
import Footer from './Components/Footer/Footer'
import Destinations from './Components/Destinations/Destinations'

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
      <Footer/>
    </div>
  )
}

export default App
