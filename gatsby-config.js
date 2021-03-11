
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`,`es`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/es` when connecting `/`
        redirect: true,
      },
    },

  ],
}
