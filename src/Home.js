import React from "react";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <>
      <section id="home">
        <NavBar />
        <h1>Wellcome to My Page</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, et
          voluptate nulla nam labore harum inventore, saepe doloremque ullam
          ipsam.
        </p>
      </section>
    </>
  );
};

export default Home;
