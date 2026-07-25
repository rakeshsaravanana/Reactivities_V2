import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./app/layout/styles.css";
import App from "./app/layout/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Data fetching,catching,syncronizing, and updating server state using QueryClient(React query)
const ClientQuery = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={ClientQuery}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
