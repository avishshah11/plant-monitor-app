import { Fragment } from "react";
import classes from "./HomepageBuy.module.css";

const HomepageBuy = () => {
  return (
    <Fragment>
      <h1 className={classes.title_bar}>New additions</h1>
      <div className={classes.card}>
        <div>
        <img
          src="https://www.gardendesign.com/pictures/images/900x705Max/site_3/chinese-evergreen-plant-aglaonema-shutterstock-com_15962.jpg"
          alt="Chinese Evergreen"
          className={classes.img1}
        />
            <div className={classes.text}>Chinese Evergreen</div>
        </div>
        <div>
        <img
          src="https://myfreshair.in/wp-content/uploads/2021/07/dumb-cane-plant-01-1.jpg"
          alt="Dumb Cane"
          className={classes.img2}
        />
        <div className={classes.text}>Dumb Cane</div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomepageBuy;
