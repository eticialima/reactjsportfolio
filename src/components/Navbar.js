import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Seu nome
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sobrem"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sobre Mim
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li> 
            <li className="nav-item">
              <Link
                to="/Modelagem"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Modelagem 3D
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Computacao"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Computação
              </Link>
            </li>
            <li>
              <Link
                to="/Contato"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
          {button && (
            <a href="/Contato">
              <Button buttonStyle="btn--outline">contato</Button>
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
