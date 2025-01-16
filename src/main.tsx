import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.ts";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "./fallbackUI/FallbackUI.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
);
