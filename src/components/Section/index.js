import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const propTypes = {
  classNames: PropTypes.string,
};

const defaultProps = {
  classNames: "",
};

const Section = ({ children, className }) => (
  <section className={`${className}`}>{children}</section>
);

Section.defaultProps = defaultProps;
Section.propTypes = propTypes;
export default Section;
