var webpack = require('webpack');
var path = require('path');
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
     //'webpack/hot/only-dev-server',
     'webpack/hot/dev-server',
     './script/app.js'
  ],
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: './build/'
     },
  module: {
   loaders: [
    { test: /\.js$/, loader: 'jsx-loader?harmony' }, // loaders can take parameters as a querystring
     // { test: /\.css$/, loader: 'style-loader!css-loader' },
     // { test: /\.json$/, loader: 'json-loader' },
     // {test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]'},
     // { test: /\.(woff2|woff|eot|ttf|svg)$/, loaders: ['file-loader?name=[path][name].[ext]'] },
     // { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] }
  
   ]
 },
  resolve: {
   // you can now require('file') instead of require('file.coffee')
   extensions: ['', '.js', '.json']
 }
//  ,
//  plugins: [
//       new webpack.HotModuleReplacementPlugin(),
//       new webpack.NoErrorsPlugin()
// ]
 //plugins: [commonsPlugin]
};
