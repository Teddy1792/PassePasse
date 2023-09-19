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
                <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1Ns5XQChueRw8NYEjpl91nWN"
  publishable-key="pk_test_51Nhs84ChueRw8NYEzkbx7VZMFlw3wX9x6d1x5jAedqMcJuthUEDkwsgGwdK3J73Sl8gsTV6ndBbeM2tW0yoJdHsy00uLPDhCP0"
>
</stripe-buy-button>
            </div>
        </div>
    );
}
