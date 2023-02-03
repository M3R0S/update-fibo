import { ResolveOptions } from "webpack";

import { WebpackOptions } from "../webpackConfig.types";

export type WebpackResolvers = (options: WebpackOptions) => ResolveOptions