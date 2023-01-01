import React from 'react';

const PlantContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {}
});

export default PlantContext;