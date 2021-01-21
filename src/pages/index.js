import React from "react"
import { Helmet } from 'react-helmet';
import { headData } from '../context/data';
import '../style/main.scss';
import App from "./../section/App"

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang } />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};