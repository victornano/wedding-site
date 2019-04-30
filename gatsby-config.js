module.exports = {
  siteMetadata: {
    title: 'Gatsby Antd Starter',
    description: 'Kick off your next, great Gatsby project with this antd starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@cardiv',
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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
