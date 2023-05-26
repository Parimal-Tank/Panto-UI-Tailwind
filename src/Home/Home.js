import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import Products from "../pages/Products";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Products />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
