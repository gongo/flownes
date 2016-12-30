const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'test/**/*.js',
    ],

    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    webpack: { //kind of a copy of your webpack config
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
        ]
      },
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-nightmare'
    ],

    nightmareOptions: {
      width: 800,
      height: 560,
      show: false,
    },

    reporters: ['progress'],
    port: 9876,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Nightmare'],
    singleRun: true,
  })
};