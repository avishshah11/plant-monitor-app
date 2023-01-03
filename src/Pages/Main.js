import { Fragment, useState } from "react";
import Decor from "../components/Decor/Decor";
import ModalContent from "../components/PlantsList/ModalContent";

const Main = () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true)
    };

    const hideCartHandler = () => {
        setShowCart(false);
    };

    return (
        <Fragment>
            <Decor onShowCart={showCartHandler}/>
            {showCart && <ModalContent onClose={hideCartHandler}/>}
        </Fragment>
    )
};

export default Main;