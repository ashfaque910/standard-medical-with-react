import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import AppointmentSection from "./components/AppointmentSection";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentDisplayData from "./components/AppointmentDisplayData";
import AppointmentEditData from "./components/AppointmentEditData";
import Carts from "./components/Carts";
import HomeCart from "./components/HomeCart";


function App() {
  const [cart, setCart] = useState([]);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact element={<YourComponent />}> */}
          <Route path="/" exact element={<HeroSection />}></Route>
          <Route
            path="appointment"
            exact
            element={<AppointmentSection />}
          ></Route>

          <Route path="/about" exact element={<AboutSection />}></Route>
          <Route path="/services" exact element={<ServiceSection />}></Route>
          <Route
            path="/appointmentdisplay"
            exact
            element={<AppointmentDisplayData />}
          ></Route>
          <Route
            path="/edit/:id"
            exact
            element={<AppointmentEditData />}
          ></Route>
          <Route path="/homecart" exact element={<HomeCart cart={cart} setCart={setCart}/>}></Route>
          <Route path="/cart" exact element={<Carts cart={cart} setCart={setCart}/>}></Route>
          {/* </Route> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
