// import { React, forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { icons } from "./config";

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf([...icons]).isRequired,
};

// const BifIcon = forwardRef(({ icon, className }, ref) => {
const BifIcon = ({ icon, className }) => {
  const classes = classNames(className, "bif", icon && `bif-${icon}`);

  // return <i ref={ref} className={classes} />;
  return <i className={classes} />;
};

BifIcon.propTypes = propTypes;

export default BifIcon;
