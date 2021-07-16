import React, { useState, useEffect, useContext } from 'react';
import { GridContext } from './GridContext';

const Table = ({ detail, row, col }) => {
    const [grid, setGrid] = useContext(GridContext);
    // const [block, setBlock] = useContext(GridContext);

    const [block, setBlock] = useState(0);

    // const getRowCol = (e, row, col) => {
    //     console.log(e.target.innerText, row, col);
    //     e.target.innerText = block;

    //     // grid[row][col] = 6;
    //     // console.log(grid);
    // };

    const getRowCol = (e) => {
        console.log(e.target);
        console.log(e.target.attributes[1].value, e.target.attributes[2].value);
        let row = parseInt(e.target.attributes[1].value) % 5;
        let col = parseInt(e.target.attributes[2].value) % 5;

        // e.target.innerText = block;
        // console.log(typeof row);
        // grid[row][col] = 6;
        let copy = [...grid];
        copy[row][col] = block;
        setGrid(copy);

        // console.log(grid);
    };
    useEffect(() => {
        console.log(grid);
    }, [grid]);

    return (
        <>
            {/* {detail.map((det) => {
                return (
                    <div className="grid" onClick={(e) => getRowCol(e, 0, 0)}>
                        {det}
                    </div>
                );
            })} */}

            {
                // console.log(detail.detail)

                detail.map((d) => {
                    // console.log(d);
                    // console.log(row);

                    return (
                        <div
                            className="grid"
                            data-row={row}
                            data-col={col++}
                            key={10000 * Math.random()}
                            onClick={(e) => getRowCol(e)}
                        >
                            {d}
                        </div>
                    );
                })
            }
            <button onClick={() => setBlock(0)}>0</button>
            <button onClick={() => setBlock(1)}>1</button>
            <button onClick={() => setBlock(2)}>2</button>
            <button onClick={() => setBlock(3)}>3</button>
            {/* <button onClick={() => setBlock(3)}>3</button> */}
            {/* <div className="grid" onClick={(e) => getRowCol(e, 0, 0)}></div>
            <div className="grid" onClick={(e) => getRowCol(e, 0, 1)}></div>
            <div className="grid" onClick={(e) => getRowCol(e, 0, 2)}></div>
            <div className="grid" onClick={(e) => getRowCol(e, 0, 3)}></div>
            <div className="grid" onClick={(e) => getRowCol(e, 0, 4)}></div> */}
        </>
    );
};

export default Table;
