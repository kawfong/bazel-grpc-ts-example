const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'), // As the index.jsx is transpiled already it is a .js file now
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // No need of SWC as it has been ran outside of Webpack during a Bazel build
    plugins: [
    ],
};