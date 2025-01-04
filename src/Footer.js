import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a href="https://github.com/Tetiana-Far" rel="noreferrer" target="_blank">
        Tetiana Farafonova
      </a>
      , is
      <a
        href="https://github.com/Tetiana-Far/weather-react"
        rel="noreferrer"
        target="_blank"
      >
        open-sourced on GitHub{" "}
      </a>
      and
      <a
        href="https://playful-praline-97041e.netlify.app/"
        rel="noreferrer"
        target="_blank"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
