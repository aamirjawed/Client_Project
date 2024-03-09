import React from "react";
import Navbar from './components/Navbar/navbar'
import About from './components/About/about'
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/Contact/contact";


const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}


export default App