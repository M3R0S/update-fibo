import {
    WebpackConfiguration,
    WebpackOptions,
} from "./types/webpackConfigTypes";

export type WebpackConfig = (options: WebpackOptions) => WebpackConfiguration;
