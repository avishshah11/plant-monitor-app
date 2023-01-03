import { useCallback, useState, useEffect, Fragment } from "react";
import PlantsList from "../PlantsList/PlantsList";
import classes from "./Decor.module.css";
import background from "../../assets/background.jpg";

const Decor = (props) => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCrop = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://house-plants.p.rapidapi.com/all", {
        headers: {
          "X-RapidAPI-Key":
            "1bdf5e5f66msh2b5012dbf63f687p17a786jsn4dc018b4f162",
          "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);
      const loadPlants = [];
      for (const key in data) {
        loadPlants.push({
          id: key,
          common: data[key].common,
          watering: data[key].watering,
          category: data[key].category,
          tempmin: data[key].tempmin,
          tempmax: data[key].tempmax,
        });
        setPlants(loadPlants);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("Testing")
    fetchCrop();
  }, [fetchCrop]);

  let content = <p className={classes.data}>No data found</p>;

  if (plants.length > 0) {
    content = <PlantsList onClick={props.onShowCart} plants={plants}/>;
  }

  if (loading){
    content = <p className={classes.data}>Loading...</p>
  }

  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={background} alt="A plant decor" />
      </div>
      <section className={classes.content}>{content}</section>
    </Fragment>
  );
};

export default Decor;
