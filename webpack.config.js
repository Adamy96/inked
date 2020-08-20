const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ca]ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            localIdentName: '[name]-[local]-[hash:base64:3]'
                        }
                    },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }
};