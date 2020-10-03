const Style9Plugin = require('style9/webpack');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js|mjs|jsx)$/,
          use: Style9Plugin.loader,
        }
      ]
    },
    plugins: [
      new Style9Plugin()
    ]
  }
};
