import { webpackAssetsLoader } from "./assets/webpackAssetsLoader";
import { webpackBabelLoader } from "./babel/webpackBabelLoader";
import { webpackSassLoader } from "./sass/webpackSassLoader";
import { webpackSvgLoader } from "./svg/webpackSvgLoader";
import { webpackTypescriptLoader } from "./typescript/webpackTypescriptLoader";
import { WebpackLoaders } from "./webpackLoaders.types";

export const webpackLoaders: WebpackLoaders = (options) => {
    return [
        webpackBabelLoader(),
        webpackTypescriptLoader(),
        webpackSassLoader(options),
        webpackAssetsLoader(),
        webpackSvgLoader(),
    ];
};
