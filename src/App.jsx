import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.jsx'
import {Title} from './components/title.jsx'
import {Message} from './components/message.jsx'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Title message="Enzo Martolini" />
    <Message message="Etudiant en developpement web, spécialisé dans le frontend, avec des bases solides en backend."/>
      <div id='remplissage'></div>
    </>
  )
}

export default App
