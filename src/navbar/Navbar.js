import React from "react";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "../component/utils/links";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../component/utils/context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <h4>Christian Esposito</h4>
        </div>
        <button className="btn nav-toggler" onClick={openSidebar}>
          <FaBars className="nav-icon" />
        </button>
      </header>
      <nav className="links-container">
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="social-links">
        <SocialBar />
      </div>
    </nav>
  );
};

export default Navbar;
