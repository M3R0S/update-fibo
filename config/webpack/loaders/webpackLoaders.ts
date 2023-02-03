import { sassLoader } from "./sass";
import { typescriptLoader } from "./typescript";
import { WebpackLoaders } from "./webpackLoaders.types";

export const webpackLoaders: WebpackLoaders = (options) => {
    return [sassLoader(options), typescriptLoader()];
};
