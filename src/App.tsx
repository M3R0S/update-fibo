import { FC, Suspense } from "react";
import { useTranslation } from "react-i18next";

import cl from "./App.module.scss";

export const App: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={cl.app}>
            <Suspense fallback="Загрузка...">
                <h1>{t("Work")}</h1>
            </Suspense>
        </div>
    );
};
