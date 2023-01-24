import classes from "./Plants.module.css";
import { Fragment } from "react";

const Plants = (props) => {
  return (
    <Fragment>
      <div className={classes.plantcontainer}>
        <div className={classes.plants}>
          <div className={classes.preview}></div>
          <div className={classes.img}>
            <img alt="plant img" src={props.img} />
          </div>
          <div className={classes.info}>
            <li>
              <h2>{props.common}</h2>
              <h3>{props.category}</h3>
              <h3>
                {props.tempmin}F, {props.tempmax}F
              </h3>
              <h3>$20</h3>
              <p className={classes.description}>{props.watering}</p>
              <button onClick={props.onClick} className={classes.button}>
                Buy
              </button>
            </li>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Plants;
