const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    publicPath: '/',
    host: 'localhost',
    port: 8080,
    open: true,
  },
};

