import path from "path";
import {
    Configuration,
    webpackConfig,
    WebpackEnv,
    WebpackMode,
    WebpackOptions,
    WebpackPaths,
} from "./config/webpack";

export default (env: WebpackEnv): Configuration => {
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
