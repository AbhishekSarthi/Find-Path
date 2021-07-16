import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = (props) => {
    const [grid, setGrid] = useState([
        [0, 2, 0, 0, 0],
        [0, 3, 3, 0, 3],
        [3, 3, 3, 0, 0],
        [0, 3, 3, 3, 0],
        [0, 3, 0, 1, 0],
    ]);

    return (
        <GridContext.Provider value={[grid, setGrid]}>
            {props.children}
        </GridContext.Provider>
    );
};
