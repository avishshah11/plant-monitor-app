import { Fragment } from "react";
import Plants from "./Plants";
import classes from "./PlantsList.module.css";

const PlantsList = (props) => {
  return (
    <Fragment>
      <ul className={classes["plants-list"]}>
        {props.plants.slice(0, 10).map((plant) => (
          <Plants
            key={plant.id}
            common={plant.common}
            category={plant.category}
            watering={plant.watering}
            tempmin={plant.tempmin.fahrenheit}
            tempmax={plant.tempmax.fahrenheit}
            onClick={props.onClick}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PlantsList;
