const path = require('path');

const {
  ProgressPlugin,
  NoEmitOnErrorsPlugin,
  HotModuleReplacementPlugin,
} = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
  entry: './src/index.tsx',
  output: {
    filename: 'app.[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'eslint-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          'raw-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new NoEmitOnErrorsPlugin(),
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        processConditionalComments: true,
        minifyJS: argv.mode === 'production',
      },
    }),
  ],
  devtool: argv.mode !== 'production' ?  'cheap-module-eval-source-map' : 'cheap-source-map',
  devServer: {
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    open: false,
    port: 9000,
    public: process.env.SELECT_URL,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    module: 'empty',
    'aws-sdk': 'empty',
  },
});
