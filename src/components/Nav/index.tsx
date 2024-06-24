import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTranslation } from "react-i18next";
import "./index.scss";
import "./index.scss";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <div className="nav-container">
      <ul className="nav">
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
    </div>
  );
};

export default Nav;
