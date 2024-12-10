import './styles/body.css';
import './styles/transition.css';
import './styles/contact.css';
import './styles/profile.css';
import './styles/header.css';
import './styles/mediaQueries.css';
import './styles/project.css';

import { useState, useEffect } from 'react';
import { Header } from './components/header.jsx';
import { Project } from './components/project.jsx';
import { Accueil } from './components/accueil.jsx';
import { Profile } from './components/profile.jsx';
import { Contact } from './components/contact.jsx';

function App() {

  const arrayProjects = [
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
      description: "Un site de reservation de bungalows pour une période dans les calanques, tout en trouvant des informations sur la destination et des sentiers à parcourir.",
      link: "https://github.com/le-plat-jonathan/parc_national",
      language: "Javascript, PHP et SQL"
    },
    {
      name: "E-commerce de padel",
      description: "Un site e-commerce construit avec Javascript, permettant aux utilisateurs de parcourir des produits, de les ajouter au panier et de passer des commandes.",
      link: "https://github.com/Enzo-Martolini/padel_site_e-commerce",
      language: "Javascript, PHP et SQL"
    }
  ];

  const [currentSection, setCurrentSection] = useState('intro');
  const [isLoadingIntro, setIsLoadingIntro] = useState(true);
  const [isLoadingMain, setIsLoadingMain] = useState(false);

  useEffect(() => {
    const timerIntro = setTimeout(() => {
      setIsLoadingIntro(false);
    }, 1500);

    const timerMain = setTimeout(() => {
      setIsLoadingMain(true);
      setCurrentSection('main'); // Change la section courante après le délai
    }, 2500);

    return () => { clearTimeout(timerIntro); clearTimeout(timerMain); };
  }, []);

  return (
    <>
      <div className={`intro ${!isLoadingIntro ? 'hidden' : ''}`}>
        <p className="title">Bienvenue sur mon <b>Portfolio</b></p>
      </div>

      <div className={`main ${isLoadingMain ? 'visible' : ''}`}>
        <Header />
        {currentSection === 'main' && (
          <>
            <Accueil />
            <Profile />
            <Project projects={arrayProjects} />
            <Contact />
          </>
        )}
      </div>
    </>
  );
}

export default App;
