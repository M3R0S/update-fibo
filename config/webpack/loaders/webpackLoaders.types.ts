import { RuleSetRule } from "webpack";
import { WebpackOptions } from "../webpackConfig.types";

export type WebpackLoaders = (options: WebpackOptions) => RuleSetRule[]