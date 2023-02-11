import { RuleSetRule } from "webpack";
import { WebpackOptions } from "../types/webpackConfigTypes";

export type WebpackLoaders = (options: WebpackOptions) => RuleSetRule[];
