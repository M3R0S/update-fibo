import { ResolveOptions } from "webpack";

import { WebpackOptions } from "../types/webpackConfigTypes";

export type WebpackResolvers = (options: WebpackOptions) => ResolveOptions;
