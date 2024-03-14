export enum TicToe {
    TIC,
    TOE,
    NONE
}

export interface UserData {
    symbol: TicToe
}

export interface BoardClickHandler {
    clickHandler: (squareId: number, data: UserData) => TicToe
}

export interface SquareProps {
    value: string
    onClick: () => void
}
