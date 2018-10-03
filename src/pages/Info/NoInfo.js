import React from "react";
import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

const NoInfo = () => {
  return (
    <div>
      <h5 className="text-center text-white" style={{ margin: "30px" }}><FormattedMessage id="noInfo" /></h5>
      <button className="btn btn-dark btn-lg mx-auto d-block" style={{ margin: "30px" }}>
        <Link to="/" style={{ textDecoration: "none" }}><span className="text-white"><FormattedMessage id="goToHome" /></span></Link>
      </button>
    </div>
  );
};

export default NoInfo;
