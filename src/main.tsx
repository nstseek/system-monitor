import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SystemContextProvider } from "./context/SystemContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SystemContextProvider>
    <App />
  </SystemContextProvider>
);
