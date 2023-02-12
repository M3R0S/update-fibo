import { FC } from "react";

import { ImgProps } from "./Img.types";

export const Img: FC<ImgProps> = (props) => {
    const { className, ...otherProps } = props;

    return <img className={className} {...otherProps} />;
};
