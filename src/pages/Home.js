import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header
        title="Bienvenue à la mosquée Sunna Roubaix"
        img="../assets/img/header-pic.jpg"
      />
    </div>
  );
};

export default Home;
