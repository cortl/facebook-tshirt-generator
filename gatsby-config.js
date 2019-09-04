module.exports = {
  siteMetadata: {
    title: 'Facebook T-Shirt Generator',
    siteUrl: 'https://tshirts.cortlan.dev',
    description: 'A T-Shirt generator for oddly specific audiences'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    }
  ],
}
