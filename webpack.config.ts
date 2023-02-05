import path from "path";

import { webpackConfig } from "./config/webpack";
import {
    WebpackEnv,
    WebpackMode,
    WebpackOptions,
    WebpackPaths,
    WebpackConfiguration,
} from "./config/webpack/types";

export default (env: WebpackEnv): WebpackConfiguration => {
    const mode: WebpackMode = env.MODE ?? "development";
    const isDev: boolean = env.MODE === "development";
    const port: number = env.PORT ?? 3000;

    const paths: WebpackPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const options: WebpackOptions = {
        isDev,
        mode,
        paths,
        port,
    };

    return webpackConfig(options);
};
