import { useRef, useState } from "react";
import Modal from "../Layout/Modal";
import classes from "./ModalContent.module.css";

const isEmpty = (value) => value.trim() === "";
const isQuantity = (value) => value >= 1 && value <= 5;
const isFiveChars = (value) => value.trim().length === 5;

const ModalContent = (props) => {
  const [didSubmit, setDidSubmit] = useState();
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
    const enteredPostalIsValid = isFiveChars(enteredPostal);

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

    if (!formIsValid) {
      return;
    }

    setDidSubmit(true);
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

  const submitted = <p>Order Sent</p>;

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form}>
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
            <p>Please enter a valid postal code (5 characters)!</p>
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
      {didSubmit && submitted}
    </Modal>
  );
};

export default ModalContent;
