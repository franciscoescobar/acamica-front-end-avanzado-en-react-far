import React from "react";
import Loading from "react-loading-bar";
import "react-loading-bar/dist/index.css";
import PropTypes from "prop-types";
const LoadingBar = ({ loading }) => (
  <div>
    <Loading show={loading} color="#3273dc" />
  </div>
);
LoadingBar.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadingBar;
