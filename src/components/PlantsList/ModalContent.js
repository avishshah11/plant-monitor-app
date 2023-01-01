import Modal from "../Layout/Modal";

const ModalContent = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div>
                Modal Testing
            </div>
            <h1>
                Modal Working
            </h1>
            <button>
                Order
            </button>
            <button onClick={props.onClose}>
                Close
            </button>
        </Modal>
    )
};

export default ModalContent;