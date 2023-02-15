import { FC } from "react";

import { LogoProps } from "./Logo.types";

import LogoImg from "shared/assets/img/Logo.png";
import { Img } from "shared/ui";

export const Logo: FC<LogoProps> = (props) => {
    const { className, ...otherProps } = props;

    return (
        <Img
            src={LogoImg}
            alt="Логотип"
            className={className}
            width={80}
            height={60}
            {...otherProps}
        />
    );
};
