import React, { useState, useEffect } from 'react';
import styles from './TicTacToe.module.css';
import Tile from './Tile';

function TicTacToe() {

  const [currentPlayer, setCurrentPlayer] = useState(true); // true = X, false = O
  const [reset, setReset] = useState(true);
  const [tiles, setTiles] = useState(Array(9).fill(""));

  const onTileClick = (index) => {
    const newTiles = [...tiles];
    newTiles[index] = currentPlayer ? "X" : "O";
    setTiles(newTiles);
    // There is a useEffect that trigger on tiles state changes which act as follow-up to this code
  };

  const resetBoard = () => {
    console.log('Resetting board');
    setTiles(Array(9).fill(""));
    setCurrentPlayer(true);
    setReset(!reset);
  }

  useEffect(() => {
    const calculateWinner = () => {
      console.log("Calculating winner");

      const winningLines =
        [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]

      console.log("Current tiles are " + tiles);
      for (let i = 0; i < winningLines.length; i++) {
        const line = winningLines[i];
        console.log("For config " + String(i + 1) + "(" + line.join('-') + ") tiles are " + (tiles[line[0]] == "" ? "-" : tiles[line[0]]) + (tiles[line[1]] == "" ? "-" : tiles[line[1]]) + (tiles[line[2]] == "" ? "-" : tiles[line[2]]));
        if (tiles[line[0]] == "X" && tiles[line[1]] == "X" && tiles[line[2]] == "X") {
          console.log("Cross has won");
          return true;
        }
        if (tiles[line[0]] == "O" && tiles[line[1]] == "O" && tiles[line[2]] == "O") {
          console.log("Circle has won");
          return true;
        }
      }

      console.log("No winner");

      return false;
    }
    if (calculateWinner()) {
      alert((currentPlayer ? "Cross" : "Circle") + " has won");
      resetBoard();
    } else if (tiles.filter(tile => tile === "").length === 0) {
      alert("It's a draw");
      resetBoard();
    } else {
      setCurrentPlayer(!currentPlayer);
    }
  }, [tiles]);

  return (<>
    <h1>TicTacToe</h1>
    <div>Current player : {currentPlayer ? "Cross" : "Circle"}</div>
    <button onClick={resetBoard}>Reset</button>
    <div className={styles.board}>
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <div className={styles.row} key={i}>
            {Array.from({ length: 3 }).map((_, j) => {
              const key = (i * 3) + (j);
              return (
                <Tile
                  currentPlayer={currentPlayer}
                  key={key}
                  id={key}
                  onTileClick={onTileClick}
                  reset={reset} />
              )
            })}
          </div>
        )
      })}
    </div>
  </>);
}

export default TicTacToe;