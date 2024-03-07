import React, {useState} from "react";
import { SquareProps, TicToe } from "./types/Props";

export default function Square(props: SquareProps): React.ReactElement {

    return (
        <button 
          className="square"
          onClick={props.onClick}>
                {props.value}
        </button>
    )
}