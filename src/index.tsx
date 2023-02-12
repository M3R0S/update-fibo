import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./app/App";
import { store } from "app/store/store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
