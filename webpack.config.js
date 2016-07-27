var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './app'),
  entry: {
    jsx: './js/app.js',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.join(__dirname, './app/build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel', 
        query: {
          presets:['react', 'es2015']
        }
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity)
  ],
  devServer: {
    contentBase: './app',
    hot: true
  }
}
