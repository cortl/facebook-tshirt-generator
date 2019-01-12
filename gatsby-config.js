module.exports = {
  siteMetadata: {
    title: 'Facebook T-Shirt Generator',
    siteUrl: 'tshirts.cortlan.co',
    description: 'A T-Shirt generator for oddly specific audiences'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}