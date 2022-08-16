import React from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import HomePostList from "./components/HomePostList";
import FilterUsers from "./components/FilterUsers";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <section id="home">
        <h1 className="primary-title">
          Dummy<span className="primary-text">JSON</span>
        </h1>
        <Slider />
        <HomePostList />
        <FilterUsers />
      </section>
      <Footer />
    </>
  );
};

export default Home;
