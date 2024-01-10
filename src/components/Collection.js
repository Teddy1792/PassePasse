import React, { useState } from 'react';
import { Modal } from './Modal';
import Naissance from '../img/photos couvertures/Naissance.jpg';
import TuNeTaderasGuere from '../img/photos couvertures/Tu ne tarderas guère.png';
import NaissanceData from '../textes/Naissance.json';
import TuNeTarderas from '../textes/TuNeTarderasGuere.json';
import '../styles/Collection.scss';

export function Collection() {
    const [modalLink, setModalLink] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isFading, setIsFading] = useState(true);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState(null);

    const handleButtonClick = (title, text, image, link) => {
        setModalTitle(title);
        setModalContent(text); // Set the text content directly
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
    <button onClick={() => handleButtonClick(
        "Naissance", 
        NaissanceData.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        )),
        Naissance,
        'https://buy.stripe.com/test_00g3fl9UfcdOeNW3cd'
    )}>
        <p>Naissance</p>
    </button>
</div>
                <div className='confessionBox'>
                    <button onClick={() => handleButtonClick(
                        "Tu ne tarderas guère", 
                        TuNeTarderas.description.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        )),
                        TuNeTaderasGuere, 
                        'https://buy.stripe.com/test_bIYcPV2rN1zafS0eUU'
                    )}><p>Tu ne tarderas guère</p></button>
                </div>
            </div>
            <Modal title={modalTitle} text={modalContent} image={modalImage} link={modalLink} closeModal={closeModal} fading={isFading} />
        </nav>
    );
}
