const nodeExternals = require('webpack-node-externals');

module.exports = [
    {
        name: 'main',
        entry: './src/index.js',
        target: 'node',
        externals: [nodeExternals()],
        devtool: 'source-map',
        output: {
            path: __dirname,
            filename: 'build/app.js',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                    },
                },
            ],
        },
    },
];