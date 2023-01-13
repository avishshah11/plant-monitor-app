import { Fragment } from "react";
import classes from "./UpcomingFeatures.module.css";

const UpcomingFeatures = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>Upcoming features</h1>
      <ul className={classes.UpcomingfeaturesList}>
        <li>Size of plant</li>
        <li>Climate</li>
        <li>Pruning</li>
        <li>Growth</li>
        <li>Origin</li>
        <li>Disease</li>
      </ul>
    </Fragment>
  );
};

export default UpcomingFeatures;
