import React from 'react';
import contactStyles from "./contact.module.scss";
import Container from '@material-ui/core/Container';
import ContactForm from "./contactForm"

const Contact = () => {
    return ( 
        <div className={contactStyles.divisor}>
            <div className={contactStyles.backgroundImage} />
            <section id="contact" className={contactStyles.container}>
                <Container>
                    <h1 style={{textAlign:"center"}}>CONTACT</h1>
                    <ContactForm />
                </Container>
            </section>
        </div>
     );
}
 
export default Contact;