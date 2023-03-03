const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
    const isProduction = env.production === true;
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                    ]
                }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            historyApiFallback: true,
            devMiddleware: {
                publicPath: '/dist/'
            }
        }
    };
};