"use client";

import { useEffect } from "react";

export default function MaterialSymbols() {
  useEffect(() => {
    const existing = document.getElementById("material-symbols-font");
    if (!existing) {
      const link = document.createElement("link");
      link.id = "material-symbols-font";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
      link.onload = () => document.documentElement.classList.add("fonts-loaded");
      document.head.appendChild(link);
    } else {
      // Already loaded
      document.documentElement.classList.add("fonts-loaded");
    }
  }, []);

  return null;
}
