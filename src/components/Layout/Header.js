import { Fragment } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Plant Decor</h1>
        <nav>
          <ul>
            <li>
              <Link className={classes.active} to="/main">
                Decor
              </Link>
            </li>
            <li>
                <Link className={classes.active} to="/team">
                Team
                </Link>
            </li>
            <li>
                <Link className={classes.active} to="/contact">
                Contact
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
