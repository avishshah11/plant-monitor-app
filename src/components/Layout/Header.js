import { Fragment } from "react";
import classes from "./Header.module.css";
import background from "../../assets/background.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Plant Decor</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={background} alt="A plant decor" />
      </div>
    </Fragment>
  );
};

export default Header;
