import { useState } from 'react'

export const Header = () => {
    const isMobile = window.innerWidth < 801 ? true : false
    const [isDisplay, setDisplay] = useState("block")
    return isMobile ? <div id="header">
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
              <p>Profile</p>
              <span></span>
              <p>Projet</p>
              <span></span>
              <p>Contact</p>
        </div> 
    </div> : <div id="header">
                <div className="divHeader">
                    <p>Accueil</p>
                </div>
                <div className="divHeader">
                    <p>Profile</p>
                    <p>Projet</p>
                    <p>Contact</p>
                </div>
            </div>
}

export default Header;
