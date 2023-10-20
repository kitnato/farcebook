import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "@farcebook/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "@farcebook/index.css";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
