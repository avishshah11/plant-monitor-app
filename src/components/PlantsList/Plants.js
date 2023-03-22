import classes from "./Plants.module.css";
import { Fragment } from "react";

const Plants = (props) => {
  return (
    <Fragment>
      <div className={classes.plants}>
        <div className={classes.img}>
          <img alt="plant img" src={props.img} />
        </div>
        <div className={classes.info}>
          <li>
            <h2>{props.common}</h2>
            <h3>Category: {props.category}, Climate: {props.climat}</h3>
            <h3>Family: {props.family}, Origin: {props.origin}</h3>
            <h3>$20</h3>
            <button onClick={props.onClick} className={classes.button}>
              Buy
            </button>
          </li>
        </div>
      </div>
    </Fragment>
  );
};

export default Plants;
