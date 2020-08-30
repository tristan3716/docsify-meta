const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = [
    {
        entry: {
            "docsify-meta": path.resolve(__dirname, "lib/docsify-meta.js")
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: '/',
            library: "docsify-meta",
            libraryTarget: "umd",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        }
                    },
                },
            ],
        },
        optimization: {
            minimize: false,
        },
    },
    {

        entry: {
            "docsify-meta.min": path.resolve(__dirname, "lib/docsify-meta.js")
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: '/',
            library: "docsify-meta",
            libraryTarget: "umd",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        }
                    },
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
              new TerserJSPlugin({}),
            ],
        },
    },
]
