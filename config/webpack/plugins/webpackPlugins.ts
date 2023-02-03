import { ProgressPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { WebpackPlugins } from "./webpackPlugins.types";

export const webpackPlugins: WebpackPlugins = (options) => {
    const { paths } = options;

    return [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].chunk.css",
        }),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
    ];
};
