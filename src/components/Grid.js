import React, { useEffect, useContext } from 'react';
import Table from './Table';
import { GridContext } from './GridContext';
// let gridTemp = [
//     [0, 2, 0, 0, 0],
//     [0, 3, 3, 0, 3],
//     [3, 3, 3, 0, 0],
//     [0, 3, 3, 3, 0],
//     [0, 3, 0, 1, 0],
// ];
let tempo = 0;
const Grid = () => {
    // const [block, setBlock] = useState(9);
    const [grid, setGrid] = useContext(GridContext);

    function is_Possible() {
        let dx = new Array(4);
        dx[0] = -1;
        dx[1] = 0;
        dx[2] = 1;
        dx[3] = 0;

        let dy = new Array(4);
        dy[0] = 0;
        dy[1] = -1;
        dy[2] = 0;
        dy[3] = 1;

        let n = grid.length;
        let m = grid[0].length;

        //creating BFS queue
        let q = new Array([]);

        //traversing all the cells of the matrix.
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                //if there exists a cell in the matrix such that its
                //value is 1 then we push it to queue.
                if (grid[i][j] === 1) {
                    let tmp = new Array(2);
                    tmp[0] = i;
                    tmp[1] = j;
                    q.push(tmp);
                }
            }
        }
        while (q.length !== 0) {
            let x = q[q.length - 1][0];
            let y = q[q.length - 1][1];
            q.pop();
            for (let i = 0; i < 4; i++) {
                let n_x = x + dx[i];
                let n_y = y + dy[i];

                //if the cell is within matrix bounds.
                if (n_x >= 0 && n_x < n && n_y >= 0 && n_y < m) {
                    //if the value of current cell is 2, we return true.
                    if (grid[n_x][n_y] === 2) {
                        console.log('TRUE');
                        return;
                    }

                    //if the value of current cell is 3, we replace the value
                    //with 1 and push the cell into the queue.
                    if (grid[n_x][n_y] === 3) {
                        let copy = [...grid];
                        copy[n_x][n_y] = 1;
                        setGrid(copy);
                        // grid[n_x][n_y] = 1;
                        let tmp = new Array(2);
                        tmp[0] = n_x;
                        tmp[1] = n_y;
                        q.push(tmp);
                    }
                }
            }
        }
        console.log('FALSE');
        return;
    }

    // useEffect(() => {
    //     if (tempo === 4) setTempo(0);
    // }, [tempo]);
    useEffect(() => {
        tempo = 0;
        console.log(grid, tempo);
    }, [grid]);

    return (
        <>
            <div className="box">
                {grid.map((detail) => {
                    return (
                        <div className="" key={10000 * Math.random()}>
                            <Table detail={detail} row={tempo++} col={0} />
                        </div>
                    );
                })}
            </div>
            {/* <div className="row">
                <div className="grid" onClick={(e) => getRowCol(e, 0, 0)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 0, 1)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 0, 2)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 0, 3)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 0, 4)}></div>
            </div>

            <div className="row">
                <div className="grid" onClick={(e) => getRowCol(e, 1, 0)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 1, 1)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 1, 2)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 1, 3)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 1, 4)}></div>
            </div>
            <div className="row">
                <div className="grid" onClick={(e) => getRowCol(e, 2, 0)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 2, 1)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 2, 2)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 2, 3)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 2, 4)}></div>
            </div>
            <div className="row">
                <div className="grid" onClick={(e) => getRowCol(e, 3, 0)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 3, 1)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 3, 2)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 3, 3)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 3, 4)}></div>
            </div>
            <div className="row">
                <div className="grid" onClick={(e) => getRowCol(e, 4, 0)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 4, 1)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 4, 2)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 4, 3)}></div>
                <div className="grid" onClick={(e) => getRowCol(e, 4, 4)}></div>
            </div>

            */}
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => is_Possible(grid)}
                >
                    Find Path
                </button>
            </div>
        </>
    );
};

export default Grid;
