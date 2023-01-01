import { useReducer } from "react";
import PlantContext from "./plant-context";

const defaultPlantState = {
    items: [],
    totalAmount: 0
};

const plantReducer = (state, action) => {
    if (action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
        return {
            items: updatedItems
        };
    }
    return defaultPlantState;
};

const PlantProvider = (props) => {
    const [plantState, dispatchPlantAction] = useReducer(plantReducer, defaultPlantState);

    const addItemToPlantHandler = (item) => {
        dispatchPlantAction({type: "ADD", item: item})
    }

    const plantContext = {
        items: plantState.items,
        totalAmount: 0,
        addItem: addItemToPlantHandler
    };

    return <PlantContext.Provider value={plantContext}>
        {props.children}
    </PlantContext.Provider>
};

export default PlantProvider;