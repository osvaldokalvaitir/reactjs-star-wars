import React from "react";

import { FormattedMessage } from "react-intl";

var year = new Date().getFullYear();

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-invert">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a
            className="nav-link text-dark small font-weight-bold"
            href="https://www.starwars.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="officialSite" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark small font-weight-bold"
            href="https://www.facebook.com/StarWars.br/?brand_redir=169299103121699"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="Facebook" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark small font-weight-bold"
            href="https://starwars.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="Tumblr" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark small font-weight-bold"
            href="https://twitter.com/starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="Twitter" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark small font-weight-bold"
            href="https://www.instagram.com/starwars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="Instagram" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark small font-weight-bold"
            href="https://plus.google.com/+StarWars/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="GooglePlus" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark small font-weight-bold"
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="YouTube" />
          </a>
        </li>
      </ul>
      <div className="copyright float-right text-dark small font-weight-bold">
        &copy; {year}, <FormattedMessage id="developedBy" />{" "}
        <a
          className="text-dark"
          href="https://github.com/osvaldokalvaitir/starwars"
          target="_blank"
          rel="noopener noreferrer"
        >
          Osvaldo
        </a>
      </div>
    </nav>
  );
};

export default Footer;
