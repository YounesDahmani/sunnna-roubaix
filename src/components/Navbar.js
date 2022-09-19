import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img
          src="./assets/img/logo-sunna-bleu.png"
          alt="Logo Mosquée Sunna Roubaix"
        />
      </NavLink>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/presentation">
          <li>Présentation</li>
        </NavLink>
        <NavLink to="/cours">
          <li>Cours</li>
        </NavLink>
        <NavLink to="/prieres">
          <li>Prières</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
