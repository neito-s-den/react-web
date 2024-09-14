import React, { useState } from 'react';
import styles from './TicTacToe.module.css';

function TicTacToe() {
  const [lastClicked, setLastClicked] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState('Cross');

  const handleCellClick = (cell) => {
    setLastClicked(cell);
    setCurrentPlayer(currentPlayer === 'Cross' ? 'Circle' : 'Cross');
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div>Last clicked TD: {lastClicked}</div>
      <div>Current Player: {currentPlayer}</div>
      <table className={styles.tttTable}>
        <tbody>
          <tr>
            <td onClick={() => handleCellClick('A1')}></td>
            <td onClick={() => handleCellClick('A2')}></td>
            <td onClick={() => handleCellClick('A3')}></td>
          </tr>
          <tr>
            <td onClick={() => handleCellClick('B1')}></td>
            <td onClick={() => handleCellClick('B2')}></td>
            <td onClick={() => handleCellClick('B3')}></td>
          </tr>
          <tr>
            <td onClick={() => handleCellClick('C1')}></td>
            <td onClick={() => handleCellClick('C2')}></td>
            <td onClick={() => handleCellClick('C3')}></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TicTacToe;