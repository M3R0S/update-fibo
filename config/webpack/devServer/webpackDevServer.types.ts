import { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { WebpackOptions } from "../types";

export type WebpackDevServer = (options: WebpackOptions) => DevServerConfiguration