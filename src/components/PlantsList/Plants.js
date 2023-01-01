import classes from "./Plants.module.css";
import { Fragment } from "react";

const Plants = (props) => {
  return (
    <Fragment>
        <li className={classes.plants}>
          <h2>{props.common}</h2>
          <h3>{props.category}</h3>
          <h3>
            {props.tempmin}, {props.tempmax}
          </h3>
          <h3>20$</h3>
          <p className={classes.description}>{props.watering}</p>
          <button onClick={props.onClick} className={classes.button}>
            +Add
          </button>
        </li>
    </Fragment>
  );
};

export default Plants;
