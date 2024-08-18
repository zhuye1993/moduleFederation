const htmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 8080,
  },
  output: {
    // filename: 'bundle.js',
    // path: __dirname + '/dist',
    // publicPath: 'http://localhost:8080',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
        // use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './NewsList': './src/NewsList'
      }
    })
  ]
}