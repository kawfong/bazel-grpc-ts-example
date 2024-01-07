const path = require("path");

module.exports = (_env, options) => {
    return {
        target: 'node',
        entry: {
            index: path.resolve(__dirname, "index.ts"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",

            // Alternative and webpack5 default:
            // futureEmitAssets: true,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./"),
            }
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: ["ts-loader"]
                },
                {
                    test: /\.d.ts$/,
                    exclude: /node_modules/,
                    use: ["ts-loader"]
                }
            ]
        }
    };
};