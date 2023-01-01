import { useState } from "react";
import Decor from "../components/Decor/Decor";
import ModalContent from "../components/PlantsList/ModalContent";
import PlantProvider from "../store/PlantProvider";

const Main = () => {

    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true)
    };

    const hideCartHandler = () => {
        setShowCart(false);
    };

    return (
        <PlantProvider>
            <Decor onShowCart={showCartHandler}/>
            {showCart && <ModalContent onClose={hideCartHandler}/>}
        </PlantProvider>
    )
};

export default Main;