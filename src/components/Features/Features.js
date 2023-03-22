import { Fragment } from "react";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>Features</h1>
      <ul className={classes.featuresList}>
        <li>Name</li>
        <li>Category</li>
        <li>climate</li>
        <li>Family</li>
        <li>Origin</li>
      </ul>
    </Fragment>
  );
};

export default Features;
