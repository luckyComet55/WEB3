import React from 'react';
import './App.css';
import Board from './Board';
import { TicToe, UserData } from './types/Props';

function App() {
  return Board({symbol: TicToe.TIC})
}

export default App;
