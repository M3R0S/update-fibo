import { WebpackPluginInstance } from "webpack";

import { WebpackOptions } from "../types/webpackConfigTypes";

export type WebpackPlugins = (
    options: WebpackOptions
) => WebpackPluginInstance[];
