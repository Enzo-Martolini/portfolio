import { useState, useEffect } from "react";

export const Header = ({ opacity }) => {
  const isMobile = window.innerWidth < 801;

  useEffect(() => {
   
  }, []);

  const getActiveClass = (id) => (activeSection === id ? "active" : "");

  return isMobile ? (
    <div
      id="header"
    >
      <div
        className="burger"
        onClick={() => setDisplay(isDisplay === "none" ? "block" : "none")}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="divHeader" style={{ display: isDisplay }}>
        <p>Accueil</p>
        <span></span>
      </div>
      <div className="divHeader" style={{ display: isDisplay }}>
        <a href="#profile">
          Profil
        </a>
        <span></span>
        <a href="#project">
          Projets
        </a>
        <span></span>
        <a href="#contact">
          Contact
        </a>
      </div>
    </div>
  ) : (
    <div
      id="header"
    >
      <div className="divHeader">
        <a
          href="#top"
          onClick={() => setHasShadow(10)}
        >
          Accueil
        </a>
      </div>
      <div className="divHeader">
        <a
          href="#linkProfile"
        
          onClick={() => setHasShadow(10)}
        >
          Profil
        </a>
        <a
          href="#linkProject"
        
          onClick={() => setHasShadow(10)}
        >
          Projets
        </a>
        <a
          href="#linkContact"
        
          onClick={() => setHasShadow(10)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
