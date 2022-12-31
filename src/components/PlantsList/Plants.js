import classes from "./Plants.module.css";
import Modal from "../Layout/Modal";
import { Fragment } from "react";

const Plants = (props) => {
  const buttonHandler = () => {
    console.log("Working");
    <Modal/>
  };

  return (
    <Fragment>
      <li className={classes.plants}>
        <h2>{props.latin}</h2>
        <h3>{props.category}</h3>
        <h3>{props.climate}</h3>
        <p className={classes.description}>{props.watering}</p>
        <button className={classes.button} onClick={buttonHandler}>
          +Add
        </button>
      </li>
    </Fragment>
  );
};

export default Plants;
