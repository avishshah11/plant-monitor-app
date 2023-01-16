import { Fragment} from "react";
import classes from "./Bestseller.module.css";

const Bestseller = (props) => {
  
  return (
    <Fragment>
      <h1 className={classes.head}>Best Seller</h1>
      <div className={classes.main}>
        <img
          src="https://i1.fnp.com/images/pr/l/v20210226154451/english-ivy-plant-in-copper-pot_1.jpg"
          alt="English ivy"
          className={classes.img_1}
        />
        <img
          src="https://cdn.worldofflowers.eu/imgproxy/Y2i1zqbOBsv13WDzDPx_Ve1Jeov968h4lS_50OrDYvI/rs:auto:500:500:0:1/g:sm/bg:fff/plain/media/productphotos/5838.jpg"
          alt="Spineless yucca Palm lily"
          className={classes.img_2}
        />
        <img
          src="https://m.media-amazon.com/images/I/818s4otZJuL._SL1500_.jpg"
          alt="Bamboo palmReed Palm"
          className={classes.img_3}
        />
      </div>
    </Fragment>
  );
};

export default Bestseller;
