import { useRef, useState } from "react";
import Modal from "../Layout/Modal";
import classes from "./ModalContent.module.css";

const ModalContent = (props) => {
    const [didSubmit, setDidSubmit] = useState();
    const nameInputRef = useRef()
    
    const orderHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        console.log(enteredName)
        setDidSubmit(true)
    }

    const submitted = <p>Order Sent</p>

  return (
    <Modal onClose={props.onClose} >
      <form>
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef}/>
        </div>
        <div>
          <label htmlFor="street">Your Street</label>
          <input type="text" id="street" />
        </div>
        <div>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
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
