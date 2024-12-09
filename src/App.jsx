import './styles/body.css';
import './styles/contact.css';
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

const [isLoading, setIsLoading] = useState(true)

useEffect(()=> {
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 5000)

  return () => clearTimeout(timer)
}, [])

  return (
    <>
      {isLoading ? (
        <p>Chargement... </p>
      ) : (
        <>
          <Header />
          <Accueil />
          <Profile />
          <Project projects={arrayProjects} />
          <Contact />
        </>
      )}
    </>
  );
}


export default App
