import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Layout/Pages/Home/Home";
import About from "./components/Layout/Pages/About";
import Service from "./components/Layout/Pages/Service";
import Contact from "./components/Layout/Pages/Contact";
const App=()=>{
  const headerPages= {
    Home:'Home',
    About:'About Us',
    Contact:'Contact Us',
    Services:'Service'
  }
  return(
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home pages={headerPages}/>} />
       <Route path="about" element={<About/>}/>
       <Route path="service" element={<Service/>}/>
       <Route path="contact" element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
