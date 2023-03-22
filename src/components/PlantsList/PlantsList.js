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
            img={plant.img}
            common={plant.common}
            category={plant.category}
            climat={plant.climat}
            family={plant.family}
            origin={plant.origin}
            onClick={props.onClick}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PlantsList;
