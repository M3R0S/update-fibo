import { FC } from "react";

import cl from "./ThemeSwitcher.module.scss";
import { ThemeSwitcherProps } from "./ThemeSwitcher.types";
import { setTheme } from "../model/themeSwitcherSlice";

import ThemeSvg from "shared/assets/svg/Theme.svg";
import { cln } from "shared/lib/helpers";
import { useAppDispatch, useAppSelector } from "shared/lib/hook";
import { Button } from "shared/ui";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.themeSwitcher.theme);

    const toggleTheme = () => {
        const isLightTheme = theme === "light";
        const invertedTheme = isLightTheme ? "dark" : "light";

        dispatch(setTheme(invertedTheme));
    };

    return (
        <Button
            onClick={toggleTheme}
            className={cln(cl.theme_switcher, [className])}
        >
            <ThemeSvg className={cl.svg} />
        </Button>
    );
};
