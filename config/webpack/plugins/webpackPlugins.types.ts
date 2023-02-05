import { WebpackPluginInstance } from "webpack";

import { WebpackOptions } from "../types";

export type WebpackPlugins = (options: WebpackOptions) => WebpackPluginInstance[]