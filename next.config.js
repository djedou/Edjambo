
const debug = process.env.NODE_ENV !== "production";
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images')

const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/admin": { page: "/admin" },
      "/apropos": { page: "/apropos" },
      "/connexion": { page: "/connexion" },
      "/gallerie": { page: "/gallerie" },
      "/media": { page: "/media" },
      "/plus": { page: "/plus" },
      "/profil": { page: "/profil" },
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
  }
};


module.exports = withPlugins(
  [
    withCSS,
    withImages
  ],
  nextConfig
);