import { RuleSetRule } from "webpack";
import { WebpackOptions } from "../types";

export type WebpackLoaders = (options: WebpackOptions) => RuleSetRule[]