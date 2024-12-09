import {Title} from './title.jsx'
import {Message} from './message.jsx'
import { useState } from 'react'

export const Contact = () => {
    const [isToggle, setToggle] = useState(false)
    return (
        <>
        <div id='linkContact'></div>
        <Title message="On reste en contact ?" id="contact"/>
        <ul>
            {isToggle ? <li className='message'><a href="tel:+33673482893">0673482893</a></li> : <li className='message' onClick={() => setToggle(true)}><p href='#'>Afficher le numéro</p></li>}           
            <li className='message'><a href="mailto:enzomartolini@mailo.com">enzomartolini[at]mailo.com</a></li>
            <li className='message'><a href="http://github.com/Enzo-Martolini">github.com/Enzo-Martolini</a></li>
            <li className='message'><a href="https://fr.linkedin.com/in/enzo-martolini-48a0b627a">Linkedin - Enzo Martolini</a></li>
        </ul>
        </>
    )
}