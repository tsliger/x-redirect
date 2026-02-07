import React from "react";
import { createRoot } from "react-dom/client";
import { Content } from "./Content";

const baseWidth = 200;
const paddingAmount = 10;

export function Popup() {
  return (
    <div
      style={{
        width: `${baseWidth}px`,
        padding: `${paddingAmount}px`,
        textAlign: "center",
      }}
    >
      <Content />
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<Popup />);
