import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  useEffect(() => {});

  return (
    <>
      <nav className="navbar">
        <header className="navbarHeader">Devslane Task</header>
        <div className="navbarSelect"></div>
      </nav>
    </>
  );
};

export default Navbar;
