import Plants from "./Plants";
import classes from "./PlantsList.module.css";

const PlantsList = (props) => {
    return (
        <ul className={classes["plants-list"]}>
            {props.plants.slice(0, 10).map((plant) =>(
                <Plants
                key={plant.id}
                latin={plant.latin}
                category={plant.category}
                watering={plant.watering}
                climate={plant.climate}
                />
            ))}
        </ul>
    )
};

export default PlantsList