import {Title} from './title.jsx'
import {Message} from './message.jsx'

export const Contact = () => {
    return (
        <>
        <div id='linkContact'></div>
        <Title message="On reste en contact ?" id="contact"/>
        <ul>
            <li className='message'><a href="tel:+33673482893">0673482893</a></li>
            <li className='message'><a href="mailto:enzomartolini@mailo.com">enzomartolini[at]mailo.com</a></li>
            <li className='message'><a href="http://github.com/Enzo-Martolini">github.com/Enzo-Martolini</a></li>
            <li className='message'><a href="https://fr.linkedin.com/in/enzo-martolini-48a0b627a">Linkedin - Enzo Martolini</a></li>
        </ul>
        </>
    )
}