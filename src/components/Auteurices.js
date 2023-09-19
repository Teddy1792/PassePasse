import '../styles/Auteurices.scss';
import { ReactComponent as Background } from '../img/backgroundAuteurices.svg';
import React, { useState } from 'react';
import { Modal } from './Modal';
import margot from '../img/photos auteurices/Margot-Darvenne.jpg'
import anonyme1 from "../img/photos auteurices/Anonymous-1.png"
import anonyme2 from "../img/photos auteurices/Anonymous-2.png"

export function Auteurices () {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isFading, setIsFading] = useState(true);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState(null);

    const handleButtonClick = (title, text, image) => {
        setModalTitle(title);
        setModalContent(text);
        setModalImage(image);
        setIsFading(false);
        setModalOpen(true);
    };

    const closeModal = () => {
        setIsFading(true);
            setModalOpen(false);
    };

    return (
        <nav>
            <Background className='backgroundImage' alt='a face engraved in a mountain, looking to the right' />
            <div className='auteurices'>
            <div className='margot auteurice'>
                <button className='btnAuteurice' onClick={() => handleButtonClick('Margot Darvenne', 'Margot Darvenne pratique une écriture plurielle, dont le versant intime assume une forme poétique depuis plusieurs années. Elle s’intéresse à l’imaginaire et au pouvoir du récit, et souscrit à l’idée selon laquelle l’intime est politique et à ce titre, partageable. Certains de ses poèmes ont été publiés dans des anthologies poétiques, notamment aux Éditions de l’Aigrette (Ailleurs, Un Rêve, Vivant(e)s). Elle collabore aussi avec des artistes issus d’autres disciplines, comme dans la revue illustrée Corpsimples ou encore avec l’adaptation sonore et théâtrale d’un récit en prose par la Cie Sarah Konnor. Elle enseigne la philosophie à Paris. Naissance est son premier recueil.', margot)}><p>Margot Darvenne</p></button>
            </div>
            <div className='manon auteurice'>
                <button className='btnAuteurice' onClick={() => handleButtonClick("Manon Crivellari", 
                'Artiste pluridisciplinaire vivant à Toulouse, Manon Crivellari aime jouer avec les supports et les matières. Elle dirige la compagnie de théâtre L’Essaimante, au sein de laquelle elle écrit, met en scène et interprète des spectacles mêlant théâtre, figures marionnettiques et installations plastiques (La nuit est tombée sur Ithaque ; Fabula). Elle pratique par ailleurs la gravure, et partage cette passion en menant des ateliers auprès de différents publics. Elle écrit et crée des illustrations pour des revues collectives (Corpsimples).', anonyme1)}><p>Manon Crivellari</p></button>
            </div>
            <div className="enfant auteurice">
                <button className='btnAuteurice' onClick={() => handleButtonClick("L'enfant du siècle", 'La discrétion exagérée de cet enfant du siècle l’a poussé à choisir, par souci d’anonymat, cette pompeuse locution comme pseudonyme. Par d’évidents indices, on devinera facilement à la lecture du texte qu’il habita Paris, que ce n’est probablement plus un enfant mais qu’il a peut-être encore quelques années devant lui. Quoi qu’il en soit, ce jeune auteur a voulu, pour son premier recueil aux airs de memento mori, explorer les correspondances entre l’écriture, le dessin, et la musique.', anonyme2)}><p>Un enfant du siècle</p></button>
            </div>
        </div>

        <Modal title={modalTitle} text={modalContent} image={modalImage} closeModal={closeModal} fading={isFading} />
        </nav>
    )
}