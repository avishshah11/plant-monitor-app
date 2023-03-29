import { Fragment } from "react";
import avish from "../../assets/avish.jpg";
import shivang from "../../assets/shivang.png";
import utkarsh from "../../assets/utkarsh.png";
import priyansh from "../../assets/priyansh.png";
import classes from "./TeamList.module.css";

const TeamList = () => {
  return (
    <Fragment>
      <h1 className={classes.title_bar}>Our Team</h1>
      <div className={classes.text}>
          Guide: Mr.Nilesh Kunhare
        </div>
      <div className={classes.card}>
        <div>
          <img src={avish} alt="Avish profile" className={classes.img1} />
          <div className={classes.text}>
            19BCE10105
            <br />
            Avish Shah
          </div>
        </div>
        <div>
          <img src={utkarsh} alt="Utkarsh profile" className={classes.img1} />
          <div className={classes.text}>
            19BCE10383
            <br />
            Utkarsh Srivastava
          </div>
        </div>
        <div>
          <img src={shivang} alt="Shivang profile" className={classes.img1} />
          <div className={classes.text}>
            19BCE10225
            <br />
            Shivang Kansal
          </div>
        </div>
        <div>
          <img src={priyansh} alt="Priyansh profile" className={classes.img1} />
          <div className={classes.text}>
            19BCE10373
            <br />
            Priyansh Saxena
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeamList;
