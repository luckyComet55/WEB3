export enum TicToe {
    TIC,
    TOE,
    NONE
}

export interface UserData {
    symbol: TicToe
    userId: string
    gameId: string
    isTurnHost: boolean
}

export interface BoardClickHandler {
    clickHandler: (squareId: number, data: UserData) => TicToe
}

export interface SquareProps {
    value: string
    onClick: () => void
}
