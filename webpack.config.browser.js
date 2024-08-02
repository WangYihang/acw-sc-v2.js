const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/acw-sc-v2.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'worker-bundle.js',
    },
    mode: 'production',
    target: 'web',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'browser',
        })
    ],
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'null-loader'
            },
        ],
    },
};
