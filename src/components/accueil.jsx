import {Title} from './title.jsx'
import {Message} from './message.jsx'

export const Accueil = ({opacity}) => {
    return <>
    <Title message="Enzo Martolini" id="accueil" opacity={opacity}/>
    <Message message="Etudiant en developpement web, spécialisé dans le frontend, avec des bases solides en backend." opacity={opacity}/>
    </>
} 