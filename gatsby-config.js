module.exports = {
  siteMetadata: {
    title: "Emerge Music Hub",
    description: "A professional development online hub for emerging artists",
    siteUrl: `https://www.emergemusichub.ca`,
    keywords: `emerge music hub, young musician, young musicians, canadian music industry, music interviews, humber college, arts management`,
    image: `/emerge-bg.png`,
  },
  plugins: [
    "gatsby-plugin-smoothscroll",
    "react-icons",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: "#1BD9DD",
        height: "10px",
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Emerge Music Hub",
        short_name: "EMH",
        start_url: "/",
        background_color: "#94CFE3",
        theme_color: "#ED5848",
        display: "fullscreen",
        icon: "src/images/iceberg.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
