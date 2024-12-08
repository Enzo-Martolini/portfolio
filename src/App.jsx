import './styles/body.css';
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
      description: "Un site web personnel qui présente mes compétences en développement web, avec une galerie de projets et un blog.",
      link: "https://www.monportfolio.com",
    },
    {
      name: "Application de Gestion de Budget",
      description: "Une application web permettant de suivre les revenus et les dépenses mensuelles, avec des graphiques et des alertes de budget.",
      link: "https://www.gestion-budget-app.com",
    },
    {
      name: "E-commerce React",
      description: "Un site e-commerce construit avec React.js, permettant aux utilisateurs de parcourir des produits, de les ajouter au panier et de passer des commandes.",
      link: "https://www.mon-site-ecommerce.com",
    },
    {
      name: "Blog sur la Technologie",
      description: "Un blog où je publie des articles sur les dernières tendances technologiques, les langages de programmation, et les outils de développement.",
      link: "https://www.techblog.com",
    },
    {
      name: "Application de Météo",
      description: "Une application mobile qui fournit les prévisions météorologiques en temps réel et les alertes météo pour différentes régions.",
      link: "https://www.app-meteo.com",
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
