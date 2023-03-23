import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <Fragment>
      <div className={classes.main}>
        <h1 className={classes.h1}>404</h1>
        <h3 className={classes.h3}>
          sorry, the page you tried cannot be found
        </h3>
        <Link to="/">Back Home</Link>
      </div>
    </Fragment>
  );
};

export default Error;
