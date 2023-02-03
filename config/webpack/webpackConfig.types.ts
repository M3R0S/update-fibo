import { Configuration as WebpackConfiguration, WebpackOptionsNormalized } from "webpack"

export type WebpackMode = "development" | "production";

export interface WebpackEnv {
    MODE?: WebpackMode;
    PORT?: number;
}

export interface WebpackPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface WebpackOptions {
    mode: WebpackMode;
    paths: WebpackPaths;
    isDev: boolean;
    port?: number;
}

export type Configuration = WebpackConfiguration | WebpackOptionsNormalized

export type WebpackConfig = (options: WebpackOptions ) => Configuration