import { createRoot } from "react-dom/client";
import { I18nextProvider } from 'react-i18next';
import App from "./App";
import "./index.css";
import i18n from "./i18n/config.ts";

// Import Tailwind CSS
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
