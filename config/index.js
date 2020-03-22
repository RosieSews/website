module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "Rosie Sews", // Navigation and Site Title
  siteTitleAlt: "rosiesews.org", // Alternative Site title for SEO
  siteTitleManifest: "rosie-sews",
  siteUrl: "https://rosiesews.org", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteHeadline: "We Can Do It!", // Headline for schema.org JSONLD
  siteBanner: "/social/logo-icon.png", // Your image for og:image tag. You can find it in the /static folder
  favicon: "src/favicon.png", // Your image for favicons. You can find it in the /src folder
  siteDescription:
    "In an effort to help curb medical supply shortages as we battle COVID19, we’re requesting seamstresses, makers and manufacturers to make masks and other supplies for use by medical professionals, at-risk community members.", // Your site description
  author: "@rosiesewsorg", // Author for schemaORGJSONLD
  siteLogo: "/social/logo-icon.png", // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@minimal', // Twitter Username - Optional
  // ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-161473355-1",

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: "#0B3160",
  backgroundColor: "#fff"
};
