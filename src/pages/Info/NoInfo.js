import React from "react";
import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

const spaceStyle = {
  margin: "30px"
};

const linkStyle = {
  textDecoration: "none"
};

const NoInfo = () => {
  return (
    <div>
      <h5 className="text-center text-white" style={spaceStyle}>
        <FormattedMessage id="noInfo" />
      </h5>
      <button
        className="btn btn-dark btn-lg mx-auto d-block"
        style={spaceStyle}
      >
        <Link to="/" style={linkStyle}>
          <span className="text-white">
            <FormattedMessage id="goToHome" />
          </span>
        </Link>
      </button>
    </div>
  );
};

export default NoInfo;
