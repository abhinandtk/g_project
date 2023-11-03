/*
* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Gava',
        titleDescription: 'ECommerce',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
module.exports = {
  trailingSlash: true,
}

// const withImages = require("next-images");
// module.exports = withImages();

module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }

  module.exports = {
    devIndicators: {
        buildActivity: false
    }
}
  