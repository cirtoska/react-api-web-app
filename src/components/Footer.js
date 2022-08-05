import React from "react";
import Signature from "./Signature";
import { FaRobot } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p className="copy">Copyright &copy; {new Date().getFullYear()}</p>
      <FaRobot />
      <p className="created">
        Created by <Signature />
      </p>
    </footer>
  );
};

export default Footer;
