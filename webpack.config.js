module.exports = {
  entry: './src/main.js',
  output: {
      filename: './build/main.js'
  },
    watch: true,
    module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ],
  }
};
