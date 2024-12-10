import { useState, useEffect } from "react";

export const Header = ({ opacity }) => {
  const isMobile = window.innerWidth < 801;
  const [currentHash, setCurrentHash] = useState(location.hash);

  useEffect(()=> {
    let handleChangeHash = () => {
        setCurrentHash(location.hash)
    }
    window.addEventListener('hashchange', handleChangeHash)
  
    return () => {
      window.removeEventListener("hashchange", handleChangeHash);
    };
  
  },[])

  return isMobile ? (
    <div id="header">
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
        <a href="#profile" className={currentHash === "#profile" ? "active" : ""}>
          Profil
        </a>
        <span></span>
        <a href="#project" className={currentHash === "#project" ? "active" : ""}>
          Projets
        </a>
        <span></span>
        <a href="#contact" className={currentHash === "#contact" ? "active" : ""}>
          Contact
        </a>
      </div>
    </div>
  ) : (
    <div id="header">
      <div className="divHeader">
        <a
          href="#top"
          className={currentHash === "#top" || currentHash === "" ? "active" : ""}
        >
          Accueil
        </a>
      </div>
      <div className="divHeader">
        <a
          href="#linkProfile"
          className={currentHash === "#linkProfile" ? "active" : ""}
        >
          Profil
        </a>
        <a
          href="#linkProject"
          className={currentHash === "#linkProject" ? "active" : ""}
        >
          Projets
        </a>
        <a
          href="#linkContact"
          className={currentHash === "#linkContact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </div>
  );
  
};
