import { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { WebpackOptions } from "../webpackConfig.types";

export type WebpackDevServer = (options: WebpackOptions) => DevServerConfiguration