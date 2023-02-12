import { FC } from "react";
import { useTranslation } from "react-i18next";

import { LogoProps } from "./Logo.types";

import LogoImg from "shared/assets/img/Logo.png";
import { Img } from "shared/ui";

export const Logo: FC<LogoProps> = (props) => {
    const { t } = useTranslation("alt");

    const { className, ...otherProps } = props;

    return (
        <Img
            src={LogoImg}
            alt={t("Logo") ?? "Логотип"}
            className={className}
            width={80}
            height={60}
            {...otherProps}
        />
    );
};
