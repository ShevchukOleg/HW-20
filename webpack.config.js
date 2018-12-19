const path = require('path');
const UglifyJs = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    main:'./script/app.js',
    libs: ['./script/libs/lib1.js', './script/libs/lib2.js']
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
  },

  plugins: [
    new UglifyJs({
      test: /\.js$/,
      exclude: /node_modules/
  })
  ],

  context: path.resolve(__dirname, 'src'),


  output: {
    filename: "bundle-[name].js",
    path: path.resolve(__dirname, "dist")
  },
  
  mode: "development",
}; 