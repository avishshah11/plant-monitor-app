import classes from "./DecorSummary.module.css";
import background from "../../assets/background.jpg";
import { Fragment } from "react";
import Features from "../Features/Features";
import UpcomingFeatures from "../Features/UpcomingFeatures";
import Image from "../Image/Image";

const DecorSummary = () => {
  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={background} alt="A plant decor" />
      </div>
    <section className={classes.summary}>
      <h2>Plant Decor & Monitoring</h2>
      <h3>Did you know?</h3>
      <p>
        The history of houseplants is intertwined with the history of container
        gardening in general. Ancient Egyptians and Sumerians grew ornamental
        and fruiting plants in decorative containers. Ancient Greeks and the
        Romans cultivated laurel trees in earthenware vessels. In ancient China,
        potted plants were shown at garden exhibitions over 2,500 years ago. In
        the medieval era, gillyflowers were displayed in containers
      </p>
      <p>
        “My green thumb came only as a result of the mistakes I made while
        learning to see things from the plant’s point of view.” — H. Fred Dale
      </p>
    </section>
    <Features/>
    <UpcomingFeatures/>
    <Image/>
    </Fragment>
  );
};

export default DecorSummary;
