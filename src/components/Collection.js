import React, { useState } from 'react';
import '../styles/Collection.scss';
import Naissance from '../img/photos couvertures/Naissance.jpg';
import TuNeTaderasGuere from '../img/photos couvertures/Tu ne tarderas guère.png';
import { Modal } from './Modal';

export function Collection() {
    const [modalLink, setModalLink] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isFading, setIsFading] = useState(true);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState(null);

    const handleButtonClick = (title, text, image, link) => {
        setModalTitle(title);
        setModalContent(text);
        setModalImage(image);
        setModalLink(link);
        setIsFading(false);
        setModalOpen(true);
    };
    

    const closeModal = () => {
        setIsFading(true);
            setModalOpen(false);
    };

    return (
        <nav>
            <div className='backgroundImgCollection'></div>
            <div className='booksCover'>
                <div className='naissanceBox'>
                <button onClick={() => handleButtonClick('Naissance', 'Récit de naissance', Naissance, 'https://buy.stripe.com/test_00g3fl9UfcdOeNW3cd')}><p>Naissance</p></button>
                </div>
                <div className='confessionBox'>
                <button onClick={() => handleButtonClick("Tu ne tarderas guère", 'Text for Confession', TuNeTaderasGuere, 'https://buy.stripe.com/test_bIYcPV2rN1zafS0eUU')}><p>Tu ne tarderas guère</p></button>
                </div>
            </div>
            <Modal title={modalTitle} text={modalContent} image={modalImage} link={modalLink} closeModal={closeModal} fading={isFading} />
        </nav>
    );
}

//Livres = formerly Collection, hence the divergence between the component name Collection and the route name!