import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { SassLoader } from "./SassLoader.types";

export const sassLoader: SassLoader = (options) => {
    const { isDev } = options;

    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? "[name]__[local]--[hash:base64:5]"
                            : "[hash:base64:5]",
                    },
                },
            },
            "sass-loader",
        ],
    };
};
