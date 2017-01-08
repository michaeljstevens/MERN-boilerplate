module.exports = {
  entry: './public/app/App.js',
  output: {
    filename: './public/build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/jsx?$/, /js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx' ]
  }
};