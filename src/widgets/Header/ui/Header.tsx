import { FC } from "react";

import cl from "./Header.module.scss";
import { HeaderProps } from "./Header.types";

import { cln } from "shared/lib/helpers";
import { Logo } from "shared/ui";
import { ThemeSwitcher } from "features/ThemeSwitcher";

export const Header: FC<HeaderProps> = (props) => {
    const { className } = props;

    return (
        <header className={cln(cl.header, [className])}>
            <Logo />
            <ThemeSwitcher />
        </header>
    );
};
