import Plants from "./Plants";

const PlantsList = (props) => {
    return (
        <ul>
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