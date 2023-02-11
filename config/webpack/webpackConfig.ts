import { WebpackConfig } from "./webpackConfig.types";
import { webpackLoaders } from "./loaders/webpackLoaders";
import { webpackPlugins } from "./plugins/webpackPlugins";
import { webpackResolvers } from "./resolvers/webpackResolvers";
import { webpackDevServer } from "./devServer/webpackDevServer";

export const webpackConfig: WebpackConfig = (options) => {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            assetModuleFilename: "assets/[hash][ext][query]",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: webpackLoaders(options),
        },
        resolve: webpackResolvers(options),
        plugins: webpackPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? webpackDevServer(options) : undefined,
    };
};
