module.exports = (config, resolve) => {
  return () => {
    config.module
      .rule('js')
      .test(/\.js$/)
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', {
            modules: false
          }, "@babel/preset-stage-0"]
        ],
        "plugins": ["@babel/plugin-proposal-class-properties", "array-includes"]
      });
  }
}