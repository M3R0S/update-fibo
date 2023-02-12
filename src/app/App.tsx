import { FC, Suspense } from "react";

import "./styles/App.scss";

import { cln } from "shared/lib/helpers";
import { useAppSelector } from "shared/lib/hook";
import { Header } from "widgets/Header";

export const App: FC = () => {
    const theme = useAppSelector((state) => state.themeSwitcher.theme);

    return (
        <div className={cln("app", [theme])}>
            <Suspense fallback="Загрузка...">
                <Header />
            </Suspense>
        </div>
    );
};
