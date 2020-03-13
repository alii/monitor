const merge = require('webpack-merge');
const common = require('./webpack.config.js')[0];

module.exports = merge(common, {
  mode: 'production',
});
