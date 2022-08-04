import React from "react";
import Signature from "./Signature";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p className="copy">Copyright &copy; {new Date().getFullYear()}</p>
      <FaGlobe />
      <p className="created">
        Created by <Signature />
      </p>
    </footer>
  );
};

export default Footer;
