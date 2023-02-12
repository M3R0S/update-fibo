import { FC } from "react";

import cl from "./{{pascalCase}}.module.scss";
import { {{pascalCase}}Props } from "./{{pascalCase}}.types";

import { cln } from "shared/lib/helpers";

export const {{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
    const { className } = props;

    return (
        <div className={cln(cl.{{snakeCase}}, [className])}>
            
        </div>
    );
};