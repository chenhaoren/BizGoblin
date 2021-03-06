const path = require('path');
const env = process.env.NODE_ENV;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let config = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'bizgoblin.min.js',
    library: 'BizGoblin',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.json'],
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }],
  },

  plugins: [],
};

if (env === 'analyse') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
