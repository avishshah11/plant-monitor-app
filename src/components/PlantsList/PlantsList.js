import { Fragment } from "react";
import Plants from "./Plants";
import classes from "./PlantsList.module.css";

const PlantsList = (props) => {
  return (
    <Fragment>
      <ul className={classes["plants-list"]}>
        {props.plants.slice(40, 60).map((plant) => (
          <Plants
            key={plant.id}
            img={plant.img}
            common={plant.common}
            category={plant.category}
            watering={plant.watering}
            tempmin={plant.tempmin.F}
            tempmax={plant.tempmax.F}
            onClick={props.onClick}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PlantsList;
