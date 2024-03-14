import React, { useState } from "react";
import Square from "./Square";
import { UserData, TicToe } from "./types/Props";

function ticToeToString(input: TicToe): string {
    let res: string
    switch(input) {
        case TicToe.TIC:
            res = 'X'
            break
        case TicToe.TOE:
            res = 'O'
            break
        case TicToe.NONE:
            res = ''
            break
    }
    return res
}

export default function Board(userData: UserData) {
    const [squares, setSquares] = useState(Array<TicToe>(9).fill(TicToe.NONE))
    const [symb, setSymb] = useState(userData.symbol)

    function handleClick(index: number) {
        const newVals = squares.slice()
        if (newVals[index] !== TicToe.NONE) {
            return
        }
        newVals[index] = symb
        setSquares(newVals)
        if (symb === TicToe.TIC) {
            setSymb(TicToe.TOE)
        } else {
            setSymb(TicToe.TIC)
        }
    }

    return (
    <>
        <div className="board-row">
            <Square value={ticToeToString(squares[0])} onClick={() => handleClick(0)}
            />
            <Square value={ticToeToString(squares[1])} onClick={() => handleClick(1)}
            />
            <Square value={ticToeToString(squares[2])} onClick={() => handleClick(2)}
            />
        </div>
        <div className="board-row">
            <Square value={ticToeToString(squares[3])} onClick={() => handleClick(3)}
            />
            <Square value={ticToeToString(squares[4])} onClick={() => handleClick(4)}
            />
            <Square value={ticToeToString(squares[5])} onClick={() => handleClick(5)}
            />
        </div>
        <div className="board-row">
            <Square value={ticToeToString(squares[6])} onClick={() => handleClick(6)}
            />
            <Square value={ticToeToString(squares[7])} onClick={() => handleClick(7)}
            />
            <Square value={ticToeToString(squares[8])} onClick={() => handleClick(8)}
            />
        </div>
    </>)
}