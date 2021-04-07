module.exports = {
  siteMetadata: {
    title: "emerge-music-hub",
  },
  plugins: [
    "gatsby-plugin-smoothscroll",
    "react-icons",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: "#ED5848",
        height: "3px",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
