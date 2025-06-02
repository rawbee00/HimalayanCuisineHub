import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import Tailwind CSS
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(<App />);
