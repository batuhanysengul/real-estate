import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import { SliderData } from '../src/data/SlideData'
import Dropdown from "./components/Mobile/index";
import React, {useState} from "react";

function App() {

  //mobile toggle menu
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <>  
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
    </>
  )
}

export default App;
