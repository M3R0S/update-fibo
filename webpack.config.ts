import { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type BuildMode = "development" | "production";

interface BuildEnv {
    MODE?: BuildMode;
    PORT?: number;
}

interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port?: number;
}

export default (env: BuildEnv): Configuration => {
    const mode: BuildMode = env.MODE ?? "development";
    const isDev: boolean = env.MODE === "development";
    const port: number = env.PORT ?? 3000;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.ts"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash:8].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        isDev ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
            new HtmlWebpackPlugin({
                template: paths.html,
                minify: isDev
                    ? false
                    : {
                          removeComments: true,
                          collapseWhitespace: true,
                          removeRedundantAttributes: true,
                          useShortDoctype: true,
                          removeEmptyAttributes: true,
                          removeStyleLinkTypeAttributes: true,
                          keepClosingSlash: true,
                          minifyJS: true,
                          minifyCSS: true,
                          minifyURLs: true,
                      },
            }),
        ],
        devtool: isDev ? "inline-source-map" : undefined,
    };
};
