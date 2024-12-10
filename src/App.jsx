import './styles/body.css';
import './styles/contact.css';
import './styles/profile.css';
import './styles/header.css';
import './styles/mediaQueries.css';
import './styles/project.css';

import { useState } from 'react'
import {Header} from './components/header.jsx'
import {Project} from './components/project.jsx'
import { Accueil } from './components/accueil.jsx'
import { Profile } from './components/profile.jsx'
import { useEffect } from 'react'
import { Contact } from './components/contact.jsx';

function App() {

  let arrayProjects = [
    {
      name: "Portfolio Personnel",
      description: "Un site web personnel qui présente mes compétences en développement web, avec une galerie de projets et mes contacts.",
      link: "https://github.com/Enzo-Martolini/portfolio",
      language: "React"
    },
    {
      name: "Budgety",
      description: "Une application web permettant de suivre les revenus et les dépenses mensuelles, tout en suivant un budget.",
      link: "https://github.com/Enzo-Martolini/Budgety",
      language: "Javascript et React"
    },
    {
      name: "Site des calanques de Marseille",
      description: "Un site de reservation de bungalows pour une periode dans les calanques, tout en trouvant des informations sur la destination et des setniers à parcourir.",
      link: "https://github.com/le-plat-jonathan/parc_national",
      language: "Javascript, PHP et SQL"
    },
    {
      name: "E-commerce de padel",
      description: "Un site e-commerce construit avec Javascript, permettant aux utilisateurs de parcourir des produits, de les ajouter au panier et de passer des commandes.",
      link: "https://github.com/Enzo-Martolini/padel_site_e-commerce",
      language: "Javascript, PHP et SQL"
    }
  ]

const [isLoadingIntro, setIsLoadingIntro] = useState(true)
const [isLoadingMain, setIsLoadingMain] = useState(false)

const [currentHash, setCurrentHash] = useState(location.hash);

useEffect(()=> {
  let handleChangeHash = () => {
    setCurrentHash(location.hash)
    console.log(location.hash)
  }
  window.addEventListener('hashchange', handleChangeHash)

  return () => {
    window.removeEventListener("hashchange", handleChangeHash);
  };

},[])

useEffect(()=> {
  const timerIntro = setTimeout(() => {
    setIsLoadingIntro(false)
  }, 1500)

  const timerMain = setTimeout(() => {
    setIsLoadingMain(true)
  }, 2000)

  const timerDisplay = setTimeout(() => {
    console.log("check 2s")
    console.log(document.querySelector('.intro'))
    document.querySelector('.intro').style.display = "none"
  }, 2000)

  return () => {clearTimeout(timerIntro); clearTimeout(timerMain); clearTimeout(timerDisplay)  }
}, [])

  return (
    <>

          <div style={isLoadingIntro ? {opacity : 1} : {opacity : 0}} className='intro'>
            <p className='title'>Bienvenue sur mon <b>Portfolio</b></p>
          </div>
          <div style={isLoadingMain ? {opacity : 1} : {opacity : 0, display : "none"}} className='main'>
          <Header />
          {currentHash === "#top" || currentHash === "" ? <Accueil opacity={isLoadingMain ? 1 : 0} /> : "" }
          {currentHash === "#linkProfile" ? <Profile /> : "" }
          {currentHash === "#linkProject" ? <Project projects={arrayProjects} /> : "" }
          {currentHash === "#linkContact" ? <Contact /> : "" }
          
          
        </div>

    </>
  );
}


export default App
