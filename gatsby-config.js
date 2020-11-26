/**
 * Configure your Gatsby site with this file.
 * 
 * gatsby-config.js 文件是 Gatsby 会自动识别的另一个特殊文件。 要在这里添加插件和网站配置
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
