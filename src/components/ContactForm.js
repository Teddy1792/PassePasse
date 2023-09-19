import { useForm, ValidationError } from '@formspree/react';
export function ContactForm() {
  const [state, handleSubmit] = useForm("xqkvdnqj");
  if (state.succeeded) {
      return <p className='thanksText'>Merci pour votre message !</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
      </label>
      <br/>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <br/>
      <p>Message</p>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <br/>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btnEnvoie" type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}