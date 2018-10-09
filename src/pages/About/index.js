import React from "react";

import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="card block-height block-width bg-secondary text-white text-center">
      <h4 className="card-header bg-dark">
        <FormattedMessage id="StarWars" /> 1.0.0
      </h4>
      <div className="card-body">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="React" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/facebook/create-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="CreateReactApp" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="ReactRouter" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/reduxjs/redux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="Redux" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="Ducks" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/jaredpalmer/formik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="Formik" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="Axios" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/yahoo/react-intl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="Intl" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/cornflourblue/jw-react-pagination"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="JWReactPagination" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://github.com/VincentGarreau/particles.js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="Particlesjs" />
            </a>
          </li>          
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="http://getbootstrap.com/docs/4.1/getting-started/introduction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="Bootstrap" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://swapi.co/documentation#start"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="StarWarsAPI" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
