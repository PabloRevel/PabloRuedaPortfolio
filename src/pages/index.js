import React from "react"
import { Helmet } from 'react-helmet';
import App from "./../section/App"
import { useIntl } from "gatsby-plugin-intl"; //language

export default () => {
  const intl = useIntl()
  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
        <title> {intl.formatMessage({ id: "meta.title" })}</title>
        <html lang="en" />
        <meta name="description" content={intl.formatMessage({ id: "meta.description" })} />
      </Helmet>
      <App />
    </>
  );
};