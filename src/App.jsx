import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Mentors from "./pages/Mentors";
import gsap from "gsap"
import Volcano from "./pages/Volcano";
import Vada from "./pages/Vada";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from "gsap/Flip";
import Shipx from "./pages/Shipx";
gsap.registerPlugin(ScrollTrigger,Flip)


function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mentors" element={<Mentors />}/>
        <Route path="/shipx" element={<Shipx />}/>
        <Route path="/volcano" element={<Volcano />}/>
        <Route path="/donut" element={<Vada />}/>

      </Routes>
  )
}

export default App
