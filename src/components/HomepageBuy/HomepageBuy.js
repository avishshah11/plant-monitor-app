import { Fragment } from "react";
import classes from "./HomepageBuy.module.css";

const HomepageBuy = () => {
  return (
    <Fragment>
      <h1 className={classes.title_bar}>Specials</h1>
      <div className={classes.card}>
        <p>Buy 5 exculsive decor plants<br/> @ just 90$</p>
        <p>Buy 8 imported decor plants<br/> @ just 150$</p>
        <p>Buy 3 aesthetic decor plants<br/> @ just 50$</p>
      </div>
    </Fragment>
  );
};

export default HomepageBuy;
