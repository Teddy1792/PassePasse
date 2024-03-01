import { ContactForm } from "./ContactForm"
import '../styles/Contact.scss'

export function Contact() {
    return(
        <nav>
            <div className='backgroundImgContact'></div>
            <div className='contactForm'>
                <h1>Contact</h1>
                <p>Vous pouvez envoyer vos manuscrits à l'adresse editionspassepasse@protonmail.com. Pour toute autre demande, merci de nous contacter en utilisant le formulaire suivant :</p>
                <ContactForm />
            </div>
        </nav>
    )
}