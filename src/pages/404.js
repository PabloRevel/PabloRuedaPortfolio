import React from "react"
import { Helmet } from 'react-helmet';
import '../style/main.scss';
import App from "../section/App"

export default () => {

  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
        <title> Pablo Rueda | Front End</title>
        <html lang="en" />
        <meta name="description" content="Desarrollador front-end en España. Abierto a colaboraciones y proyectos. 
        ¡Si necesitas un sitio web no dudes en contactarme!" />
      </Helmet>
      <App />
    </>
  );
};