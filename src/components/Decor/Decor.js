import { useCallback, useState, useEffect, Fragment } from "react";
import PlantsList from "../PlantsList/PlantsList";
import classes from "./Decor.module.css";
import loadingGif from "../../assets/preloader.gif";

const Decor = (props) => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCrop = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://house-plants2.p.rapidapi.com/all-lite", {
        headers: {
          "X-RapidAPI-Key":
            "1bdf5e5f66msh2b5012dbf63f687p17a786jsn4dc018b4f162",
          "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
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
          img: data[key].Img,
          common: data[key]["Common name"],
          climat: data[key].Climat,
          category: data[key].Categories,
          family: data[key].Family,
          origin: data[key].Origin,
        });
        setPlants(loadPlants);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("Testing");
    fetchCrop();
  }, [fetchCrop]);

  let content = <p className={classes.data}>No data found</p>;

  if (plants.length > 0) {
    content = <PlantsList onClick={props.onShowCart} plants={plants} />;
  }

  if (loading) {
    content = <p className={classes.data}>
      <img src={loadingGif} alt="spinner"/>
    </p>;
  }

  return (  
    <Fragment>
      <section className={classes.content}>{content}</section>
    </Fragment>
  );
};

export default Decor;
