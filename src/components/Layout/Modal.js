import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const Backdrop = (props) => {
    return <div/>
}

const ModalOverlay = (props) => {
    return (
        <div>
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        <Card>
            <header>
                <h2>
                    Title
                </h2>
            </header>
        </Card>
    </Fragment>
};

export default Modal;