import { Fragment } from "react";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>Features</h1>
      <ul className={classes.featuresList}>
        <li>Name</li>
        <li>Category</li>
        <li>Minimum temperature</li>
        <li>Maximum temperature</li>
        <li>Watering</li>
      </ul>
    </Fragment>
  );
};

export default Features;
