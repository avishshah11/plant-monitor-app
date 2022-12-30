const Plants = (props) => {
    return (
        <li>
            <h1>{props.latin}</h1>
            <h3>{props.category}</h3>
            <h3>{props.watering}</h3>
            <h2>{props.climate}</h2>
        </li>
    )
};

export default Plants;