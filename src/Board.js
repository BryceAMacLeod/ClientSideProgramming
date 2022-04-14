import React from 'react';
import {Square} from './Square';

export class Board extends React.Component {
    
    renderSquare(i, row, togglable, current) {
        
        return (
            <Square
                class={row}
                id={"t" + row + "-" + i}
                onClick={() => togglable ? this.props.onClick(i, row) : null}
                togglable={togglable}
                currentState={current}
            />
        );
    }

    renderRow(row, rowCount) {
        let count = 0;
        return (      
            row.map((square) => 
                this.renderSquare(count++,rowCount,square.canToggle,square.currentState)
            )
        );
    }

    render() {
        let rowCount = 0;
        const data = this.props.puzzleData;

        return ( 
            <table>
                <tbody key={"tbody"}>
                    {
                        data?.map(row => {
                            return <tr key={rowCount}>
                                {this.renderRow(row, rowCount++)}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        )
    }
}