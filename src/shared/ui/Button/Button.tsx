import { FC } from "react";

import cl from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

import { cln } from "shared/lib/helpers";

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = "clear", ...otherProps } = props;

    return (
        <button
            className={cln(cl.button_root, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
