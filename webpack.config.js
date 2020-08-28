var path = require('path');

module.exports = {
    entry: './lib/docsify-meta.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'docsify-meta.js',
    },

    performance: {
        hints: 'warning'
    },

    optimization: {
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        concatenateModules: true,
        splitChunks: {
            hidePathInfo: true,
            minSize: 30000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: false,
    },
};