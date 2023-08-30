import path from 'path'
import { fileURLToPath } from 'url'
import nodeExternals from 'webpack-node-externals'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  mode: 'development',
  entry: './main.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
