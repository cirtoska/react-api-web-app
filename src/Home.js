import React from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";

const Home = () => {
  return (
    <>
      <section id="home">
        <NavBar />
        <h1>Wellcome to My Page</h1>
        <section className="subtitle">
          <Slider />
        </section>
      </section>
    </>
  );
};

export default Home;
