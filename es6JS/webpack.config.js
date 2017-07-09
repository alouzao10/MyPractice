module.exports = {
  entry: ['/Users/alexlouzao/Desktop/es6/app/book.js'],
  output: {
    path: '/Users/alexlouzao/Desktop/es6/build',
    filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         }
      ]
   },
   devServer: {
      port: 3000,
      contentBase: '/Users/alexlouzao/Desktop/es6/build',
      inline: true
   }
}
