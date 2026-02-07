import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

export function Popup() {
  return <App />;
}

const root = createRoot(document.getElementById("root")!);
root.render(<Popup />);
