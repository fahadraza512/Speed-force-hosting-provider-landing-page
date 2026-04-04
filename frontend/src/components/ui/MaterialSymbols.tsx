import React from "react";

// Rendered server-side so the font link is in the HTML from the start — no flash
export default function MaterialSymbols() {
  return (
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  );
}
