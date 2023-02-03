import { WebpackPluginInstance } from "webpack";

import { WebpackOptions } from "../webpackConfig.types";

export type WebpackPlugins = (options: WebpackOptions) => WebpackPluginInstance[]