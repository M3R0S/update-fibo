import { RuleSetRule } from "webpack";

import { WebpackOptions } from "../../webpackConfig.types";

export type SassLoader = (options: WebpackOptions) => RuleSetRule