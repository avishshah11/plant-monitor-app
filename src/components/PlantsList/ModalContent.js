import { Fragment, useRef, useState } from "react";
import Modal from "../Layout/Modal";
import classes from "./ModalContent.module.css";

const isEmpty = (value) => value.trim() === "";
const isQuantity = (value) => value >= 1 && value <= 5;
const isSixChars = (value) => value.trim().length === 6;

const ModalContent = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    quantity: true,
    street: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const quantityInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();

  const orderHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredQuantityIsValid = isQuantity(enteredQuantity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isSixChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      quantity: enteredQuantityIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredQuantityIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid;

    const userData = {
      name: enteredName,
      quantity: enteredQuantity,
      street: enteredStreet,
      postalCode: enteredPostal,
    };

    if (!formIsValid) {
      return;
    } else {
      setIsSubmitting(true);
      fetch("https://plant-decor-default-rtdb.firebaseio.com/user.json", {
        method: "POST",
        body: JSON.stringify({
          user: userData,
        }),
      });
      setIsSubmitting(false);
      setDidSubmit(true);
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const quantityControlClasses = `${classes.control} ${
    formInputsValidity.quantity ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const plantModalContent = (
    <Fragment>
      <form className={classes.form}>
        <h1 className={classes.h1}>Shipping details</h1>
        
        <div className={nameControlClasses}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={quantityControlClasses}>
          <label htmlFor="quantity">Quantity</label>
          <input type="text" id="quantity" ref={quantityInputRef} />
          {!formInputsValidity.quantity && (
            <p>Please enter a valid quantity (1-5)!</p>
          )}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street">Your Street</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formInputsValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalInputRef} />
          {!formInputsValidity.postalCode && (
            <p>Please enter a valid postal code (6 characters)!</p>
          )}
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes["button--alt"]} onClick={orderHandler}>
            Order
          </button>
        </div>
      </form>
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Order Successfully Placed</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && plantModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default ModalContent;
