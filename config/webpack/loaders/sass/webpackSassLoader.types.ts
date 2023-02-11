import { RuleSetRule } from "webpack";

import { WebpackOptions } from "../../types/webpackConfigTypes";

export type WebpackSassLoader = (options: WebpackOptions) => RuleSetRule;
