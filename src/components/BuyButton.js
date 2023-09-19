import React, { useEffect } from 'react';

export const StripeBuyButton = ({ src, buyButtonId, publishableKey }) => {
    useEffect(() => {
        // Load the Stripe script dynamically
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
            console.log('Stripe script loaded!');
        };
        document.body.appendChild(script);

        return () => {
            // Clean up the script tag when the component is unmounted
            document.body.removeChild(script);
        };
    }, [src]);

    return (
        <stripe-buy-button
            buy-button-id={buyButtonId}
            publishable-key={publishableKey}
        ></stripe-buy-button>
    );
};

/* 

            <h1>Tarderas Guère</h1>
            <StripeBuyButton
                src="https://js.stripe.com/v3/buy-button.js"
                buyButtonId="buy_btn_1Ns5XQChueRw8NYEjpl91nWN"
                publishableKey="pk_test_51Nhs84ChueRw8NYEzkbx7VZMFlw3wX9x6d1x5jAedqMcJuthUEDkwsgGwdK3J73Sl8gsTV6ndBbeM2tW0yoJdHsy00uLPDhCP0"
            />

            <h1>Naissance</h1>
            <StripeBuyButton
                src="https://js.stripe.com/v3/buy-button.js"
                buyButtonId="buy-button-id="buy_btn_1Ns5kYChueRw8NYEPczSEBvI"
                publishableKey="pk_test_51Nhs84ChueRw8NYEzkbx7VZMFlw3wX9x6d1x5jAedqMcJuthUEDkwsgGwdK3J73Sl8gsTV6ndBbeM2tW0yoJdHsy00uLPDhCP0"
            />

*/
