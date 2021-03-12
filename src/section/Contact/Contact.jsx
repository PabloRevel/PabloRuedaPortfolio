import React from 'react';
import { FormattedMessage } from "gatsby-plugin-intl"; //language

import contactStyles from "./contact.module.scss";
import Container from '@material-ui/core/Container';
import ContactForm from "./contactForm"

const Contact = () => {
    return ( 
        <div className={contactStyles.divisor}>
            <section id="contact" className={contactStyles.container}>
                <Container>
                    <h1 style={{textAlign:"center"}}><FormattedMessage id="contact.title"/></h1>
                    <ContactForm />
                </Container>
            </section>
        </div>
     );
}
 
export default Contact;