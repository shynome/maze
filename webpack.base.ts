import webpack = require('webpack')
import HtmlWebpackPlugin = require('html-webpack-plugin')
import CleanWebpackPlugin = require('clean-webpack-plugin')

export const config:webpack.Configuration = {
  target:"web",
  entry:[
    "react-hot-loader/patch",
    "./frontend/render.tsx",
  ],
  output:{
    filename:'./dist/[name].bundle.[hash].js',
    chunkFilename:'./dist/[name].chunk.[hash].js',
  },
  plugins:[
    new CleanWebpackPlugin(['./dist','index.html']),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor",
      minChunks: (module)=>module.context && module.context.indexOf("node_modules") !== -1,
    }),
    new HtmlWebpackPlugin({
      filename:'./index.html',
      template:'./frontend/index.tpl.html',
    })
  ],
  devtool:'source-map',
  resolve:{
    extensions:[ '.js', '.jsx', '.ts', '.tsx' ]
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:[
          { loader:'react-hot-loader/webpack' },
          {
            loader:'awesome-typescript-loader',
            options:{ configFileName:'./frontend/tsconfig.json' }
          }
        ],
      }
    ]
  },
}
