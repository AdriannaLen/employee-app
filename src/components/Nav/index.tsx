import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTranslation } from "react-i18next";
import "./index.scss";
import "./index.scss";
import Button from "../Button/Button";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { t } = useTranslation();
  
  return (
    <div>
      <nav className="">
        <ul className="nav">
          <li>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={80}
            />
          </li>
          <li>
            <Link
              to="/"
              className="button button--primary button--content button--large btn"
            >
              {t("app.home")}
            </Link>
          </li>
          <li>
            <Link
              to="/user-list"
              className="button button--primary button--content button--large btn"
            >
              {t("app.employee-list")}
            </Link>
          </li>
          <li>
            <Link
              to="/add-new-worker"
              className="button button--primary button--content button--large btn"
            >
              {t("app.new-employee")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
