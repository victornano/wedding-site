module.exports = {
  siteMetadata: {
    title: 'Victor y Vale',
    description: '',
    author: '',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-less',
    //   options: {
    //     javascriptEnabled: true,
    //     modifyVars: {
    //       'body-background': '#000',
    //       'heading-color': '#fff',
    //       'text-color': '#fff',
    //     }
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-antd',
    //   options: {
    //     style: true,
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#EDDEAD',
        theme_color: '#EDDEAD',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
