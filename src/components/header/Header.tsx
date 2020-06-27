import "./Header.scss";

import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={"header"}>
      <Link
        to="/"
        className={"logo"}
      >
        {"hepsiburada"}
      </Link>
    </header>
  );
}
