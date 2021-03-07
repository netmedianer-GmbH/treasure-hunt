module.exports = {
  pathPrefix: "/treasure-hunt",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wiki`,
        path: `${__dirname}/src/wiki/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "text-3xl my-4",
                "heading[depth=2]": "text-2xl my-4",
                "heading[depth=3]": "text-xl my-4",
                "paragraph": "mt-2 text-lg font-light leading-relaxed",
                "image": "p-4",
                "list": "list-disc text-lg pl-6 py-4",
                "blockquote": "p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-indigo-800 quote my-4"
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
