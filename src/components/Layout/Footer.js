import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <div className={classes.head}>Capstone Project</div>
        <div className={classes.contain}>
          <div className={classes.col}>
            <h1>POLICY HOLDER</h1>
            <ul>
              <li>Terms of Service</li>
              <li>Refund policy</li>
              <li>Privacy policy</li>
              <li>Data use policy</li>
              <li>Shipping policy</li>
            </ul>
          </div>
          <div className={classes.col}>
            <h1>Quick Links</h1>
            <ul>
              <li>
                <Link to="/">Home page</Link>
              </li>
              <li>
                <Link to="/main">Decor</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={classes.col}>
            <h1>Address</h1>
            <p>Vit Bhopal, Sehore, M.P, 123456</p>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright © 2023 Plant decor and Monitoring
      </div>
    </Fragment>
  );
};

export default Footer;

// <div className={classes.footer}>
// Capstone project
// <h1 className={classes.policy}>POLICY HOLDER</h1>
// <ul className={classes.pol}>
//   <li>Terms of Service</li>
//   <li>Refund policy</li>
//   <li>Privacy policy</li>
//   <li>Data use policy</li>
//   <li>Shipping policy</li>
// </ul>
// <div>Copyright © 2023 Plant decor and Monitoring</div>
// </div>
