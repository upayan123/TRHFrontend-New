import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./rapidcss/style.css";
import "./rapidcss/responsive.css";

import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contactus from "./components/Contactus";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Team from "./components/Team";
import Career from "./components/Career";
import Privacypolicy from "./components/Privacypolicy";
import Return from "./components/Return";
import Blogdetail from "./components/Blogdetail";
import Apply from "./components/Apply";
import Terms from "./components/Terms";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


function App () {
  return (
    <div>
      <BrowserRouter>
      <Header/>    
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<Aboutus />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/contactus" element={<Contactus />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/feature" element={<Features />}></Route>
          <Route exact path="/technology" element={<Technology />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/privacy" element={<Privacypolicy />}></Route>
          <Route exact path="/return" element={<Return />}></Route>
          <Route exact path="/blogdetail" element={<Blogdetail />}></Route>
          <Route exact path="/apply" element={<Apply />}></Route>
          <Route exact path="/terms" element={<Terms/>}></Route>    
        </Routes>
        <Footer/>
        <Sidebar/>
      </BrowserRouter>
    </div>
  );
}
export default App;
