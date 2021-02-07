module.exports = {
  siteMetadata: {
    title: `Dynalist Highlighter`,
    description: `Highlight the web`,
    author: `@wirtzdan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-boilerplate`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007FFF`,
        display: `browser`,
        icon: `./src/assets/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `dynalist-highlighter.danielwirtz.com`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
  ],
};
