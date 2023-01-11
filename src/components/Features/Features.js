import { Fragment } from "react";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>Features</h1>
      <ul className={classes.featuresList}>
        <li>Plant name</li>
        <li>Categories of plant</li>
        <li>Min and max temp</li>
        <li>Watering way</li>
      </ul>
    </Fragment>
  );
};

export default Features;
