import React from "react";
import { StyledTitle } from "./styled";
import PropTypes from "prop-types";
const Title = ({ title }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
  </>
);
Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
