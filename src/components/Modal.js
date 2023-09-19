import '../styles/Modal.scss';
import { ReactComponent as CloseButton } from '../img/close-button.svg';

export function Modal({ title, text, image, closeModal, fading, link }) {
    return (
        <div className={`modal ${fading ? '' : 'visible'}`}>
            <div className="modal-content">
                <CloseButton className="btnClose" onClick={closeModal} alt='fermer la modale' />
                <img src={image} alt={title} />
                <div className='textAchat'>
                    <div className='text'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                    {link && 
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <button className='btnAchat'>Acheter</button>
                        </a>
                    }
                </div>
                
            </div>
        </div>
    );
}
