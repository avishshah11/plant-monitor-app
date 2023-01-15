import { Fragment } from "react";
import classes from "./FreeShipping.module.css";

const FreeShipping = () => {
    return (
        <Fragment>
            <p className={classes.freeship}>Free shipping on all orders over 100$.</p>
        </Fragment>
    )
};

export default FreeShipping;