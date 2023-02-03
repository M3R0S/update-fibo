import { WebpackConfig } from "./webpackConfig.types";
import { webpackLoaders } from "./loaders";
import { webpackPlugins } from "./plugins";
import { webpackResolvers } from "./resolvers";
import { webpackDevServer } from "./devServer";

export const webpackConfig: WebpackConfig = (options) => {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash:8].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: webpackLoaders(options),
        },
        resolve: webpackResolvers(options),
        plugins: webpackPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: webpackDevServer(options),
    };
};
