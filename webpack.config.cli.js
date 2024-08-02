const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './cli.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'worker-bundle.js',
    },
    mode: 'production',
    target: 'node',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'cli',
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
