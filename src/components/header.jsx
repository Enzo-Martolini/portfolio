import { useState, useEffect } from "react";

export const Header = ({ opacity }) => {
  const isMobile = window.innerWidth < 801;
  const [currentHash, setCurrentHash] = useState(location.hash);
  const [hasShadowY, setHasShadow] = useState(0);

  useEffect(()=> {
    let handleChangeHash = () => {
        setCurrentHash(location.hash)
    }
    window.addEventListener('hashchange', handleChangeHash)
  
    return () => {
      window.removeEventListener("hashchange", handleChangeHash);
    };
  
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY * 100 / 1000; 
      scrollValue < 10 ? setHasShadow(scrollValue) : null;
  };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div id="header" style={hasShadowY ? { boxShadow: `0px ${hasShadowY}px 30px -10px #000000` } : {}}>
      <div className="divHeader">
        <a
          href="#top"
          className={currentHash === "#top" || currentHash === "" ? "active" : ""}
          onClick={() => setHasShadow(10)}
        >
          Accueil
        </a>
      </div>
      <div className="divHeader">
        <a
          href="#linkProfile"
          className={currentHash === "#linkProfile" ? "active" : ""}
          onClick={() => setHasShadow(10)}
        >
          Profil
        </a>
        <a
          href="#linkProject"
          className={currentHash === "#linkProject" ? "active" : ""}
          onClick={() => setHasShadow(10)}
        >
          Projets
        </a>
        <a
          href="#linkContact"
          className={currentHash === "#linkContact" ? "active" : ""}
          onClick={() => setHasShadow(10)}
        >
          Contact
        </a>
      </div>
    </div>
  );
  
};
