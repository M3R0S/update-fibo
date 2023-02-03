export const test = () => {
    return 2 + 2
}

type BuildMode = "development" | "production";

export interface BuildEnv {
    MODE: BuildMode;
    PORT: number | undefined;
}