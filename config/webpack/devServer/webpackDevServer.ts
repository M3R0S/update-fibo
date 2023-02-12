import { WebpackDevServer } from "./webpackDevServer.types";

export const webpackDevServer: WebpackDevServer = (options) => {
    const { port, paths } = options;

    return {
        port,
        historyApiFallback: true,
        hot: true,
    };
};
