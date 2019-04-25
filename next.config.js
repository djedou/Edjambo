
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/user": { page: "/user" },
    }
  },
  assetPrefix: !debug ? '/Edjambo/' : '',
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  },
  publicRuntimeConfig: {
    staticFolder: '/static'
  }
}