import React from "react";
import Loading from "react-loading-bar";
import "react-loading-bar/dist/index.css";
const LoadingBar = ({ loading }) => (
  <div>
    <Loading show={loading} color="#3273dc" />
  </div>
);

export default LoadingBar;
