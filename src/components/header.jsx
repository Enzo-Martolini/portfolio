import { useState, useEffect } from 'react'

export const Header = () => {
    const isMobile = window.innerWidth < 801;
    const [isDisplay, setDisplay] = useState("block");
    const [hasShadowY, setHasShadow] = useState(0);
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollValue = window.scrollY * 100 / 1000; 
        scrollValue < 10 ? setHasShadow(scrollValue) : null;
    };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    

    return isMobile ? <div id="header" style={hasShadowY ? {
        boxShadow: "0px 10px 10px -10px #000000",
      } : {}}>
            <div className="burger" onClick={() => setDisplay(isDisplay === "none" ? "block" : "none")}>
                <span></span>
                <span></span>
                <span></span>
            </div>
         <div className="divHeader" style={{display: isDisplay}}>
            <p>Accueil</p>
            <span></span>
        </div>
        <div className="divHeader"  style={{display: isDisplay}}>
              <a href='#profile'>Profil</a>
              <span></span>
              <a href='#project'>Projets</a>
              <span></span>
              <a href='#contact'>Contact</a>
        </div> 
    </div> : <div 
                id="header" 
                style={hasShadowY ? { boxShadow: `0px ${hasShadowY}px 30px -10px #000000` } : {}}>
                <div className="divHeader">
                <a href='#top'>Accueil</a>
                </div>
                <div className="divHeader">
                <a href='#linkProfile'>Profil</a>
                <a href='#linkProject'>Projets</a>
                <a href='#linkContact'>Contact</a>
                </div>
            </div>
}

