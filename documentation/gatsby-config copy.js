const languages = {
  langs: ['en', 'de'],
  defaultLangKey: 'en'
};

module.exports = {
  assetPrefix: `/assets`,
  pathPrefix: `/site`,
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        //langKeyDefault: 'en',
        //useLangKeyLayout: false
        langKeyForNull: 'de',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
        prefixDefault: false,
      }
    }
  ]
};
