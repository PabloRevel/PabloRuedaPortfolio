import React from 'react'
import contactStyle from "./contact.module.scss"

import Btn from "./../../components/button/Button"

import { Formik, Form, Field, ErrorMessage } from 'formik'; // simplify forms
import * as Yup from 'yup'; // simplify information
import emailjs from 'emailjs-com'; // manage email information

const initialValues = { //form information
    name: "",
    email: "",
    description:""
};
const onSubmit =  (values,onSubmitProps) => {
    console.log("form data", values)
    console.log("submit props", onSubmitProps)

    let serviceID = process.env.GATSBY_SERVICE_ID
    let templateID = process.env.GATSBY_TEMPLATE_ID;
    let userID = process.env.GATSBY_USER_ID;
    emailjs.send(serviceID,templateID,values,userID) ;

    onSubmitProps.resetForm(); // clean form
}

const validationSchema = Yup.object({
    name: Yup.string().required("Requerido"),
    email: Yup.string().email("Email inválido").required("Requerido"),
    description: Yup.string().required("Requerido"),
})

const ContactForm = () => {

    return ( 
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            {formik => { 
                return(
                    <Form className={contactStyle.form}>
                    <Field className={contactStyle.field} placeholder="Nombre" 
                        type="text" id="name" name="name" />

                    <ErrorMessage name="name" style={{color:"red"}}/>
                        
                    <Field className={contactStyle.field} placeholder="E-mail" 
                            type="email" id="email" name="email" />
                    <ErrorMessage name="email" className={contactStyle.error} />
                        
                    <Field as="textarea" placeholder="How can I help you? | ¿Cómo puedo ayudarte?"  
                        type="text" id="description" name="description" style={{height:"150px"}}
                        className={contactStyle.field} />
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <Btn mainColor="#8DBE49" hoverText="#FFFFFF" > Enviar</Btn>
                    </div>
                    
                </Form>
            )}}
        </Formik>
     );
}
 
export default ContactForm;


