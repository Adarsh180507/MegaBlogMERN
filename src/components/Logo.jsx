import React from "react";
import logo from "./logo.jpg";

export default function Logo({ width = "100px", className = "" }) {
  return (
    <img
      src={logo}
      alt="MegaBlog Logo"
      style={{ width }}
      className={`object-contain ${className}`}
    />
  );
}
