import { ReactComponent as ContactBackground } from '../img/backgroundContact.svg';
import { ContactForm } from "./ContactForm"
import '../styles/Contact.scss'

export function Contact() {
    return(
        <nav>
            <ContactBackground className='backgroundContactImage' alt="" />
            <div className='contactForm'>
                <h1>Contact</h1>
                <p>La maison n'accepte pas de manuscrits à l'heure actuelle. Pour toute autre demande, merci de nous contacter à l'adresse suivante :</p>
                <ContactForm />
            </div>
        </nav>
    )
}