import { useRef, useState } from "react";
import Modal from "../Layout/Modal";
import classes from "./ModalContent.module.css";

const ModalContent = (props) => {
    const [didSubmit, setDidSubmit] = useState();
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

        console.log(
          enteredName,
          enteredQuantity,
          enteredStreet,
          enteredPostal);

        setDidSubmit(true)
    }

    const submitted = <p>Order Sent</p>

  return (
    <Modal onClose={props.onClose} >
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="quantity">Quantity</label>
          <input type="text" id="quantity" ref={postalInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Your Street</label>
          <input type="text" id="street" ref={streetInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalInputRef}/>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes["button--alt"]} onClick={orderHandler}>Order</button>

        </div>
      </form>
      {didSubmit && submitted}
    </Modal>
  );
};

export default ModalContent;
