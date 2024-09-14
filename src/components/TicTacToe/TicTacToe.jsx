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
      {renderTable()}
    </>
  );
}

function renderTable() {
  return (
    <table className={styles.tttTable}>
      <tbody>
        {Array.from({ length: 3 }).map((_, trIndex) => {
          
        })}
      </tbody>
    </table >
  );
}

export default TicTacToe;