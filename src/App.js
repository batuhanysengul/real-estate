import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import { SliderData } from '../src/data/SlideData'

function App() {
  return (
    <>  
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  )
}

export default App;
