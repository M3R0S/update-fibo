import { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { WebpackOptions } from "../types/webpackConfigTypes";

export type WebpackDevServer = (
    options: WebpackOptions
) => DevServerConfiguration;
