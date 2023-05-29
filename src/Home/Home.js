import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import Products from "../pages/Products";
import Experiences from "../pages/Experiences";
import Testimonial from "../pages/Testimonial";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Products />
      <Experiences />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
