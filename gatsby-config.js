module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "menu-items",
                path: `${__dirname}/menu-items`
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        `gatsby-plugin-netlify-cms`
    ]
}

//gatsby-plugin-sharp, gatsby-transformer-sharp, gatsby-image