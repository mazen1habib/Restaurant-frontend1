import React, { Fragment } from "react";
import "./css/loading.css";
const Loading = () => {
  return (
    <Fragment>
      <div className="container-loading">
        <div class="loader">
          <div class="loader-text">Loading...</div>
          <div class="loader-bar"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loading;
