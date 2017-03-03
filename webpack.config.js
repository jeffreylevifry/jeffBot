module.exports = {
  entry: "./app/components/main.jsx",
  output: {
    filename: "public/bundle.js"
  },
  devServer: {
   headers: { "Access-Control-Allow-Origin": "*" }
},
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }
    ,
    
    
    {
      test: /\.(png|gif)$/,
      loader: "url-loader?limit=5000"
    }
    , {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
    }]
}}