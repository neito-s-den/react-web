import React, { useState } from "react";
import styles from "./GameManager.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function GameManager({ onAddPlayerClicked, onRemovePlayerClicked, players, gameStarted, setGameStarted }) {
  const [player, setPlayer] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addPlayer = () => {
    console.log("Adding player...");
    !players.includes(player)
      ? onAddPlayerClicked(player)
      : alert("Player already exists");
    setPlayer("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && player) {
      console.log("Enter key pressed");
      addPlayer();
    }
  };

  const addRound = () => {
    console.log("adding round");
  }

  const cancelGame = () => {
    console.log("canceling game");

  }

  const displayGameButton = () => {
    const config = {
      displayText: gameStarted ? "Add Round" : "Start game",
      onClick: gameStarted ? () => { addRound() } : () => (setGameStarted(true))
    }
    let gameButton = <button onClick={config.onClick} disabled={players.length === 0}>{config.displayText}</button>
    let cancelGameButton = <button
      onClick={cancelGame}
      disabled={players.length === 0}
      hidden={!gameStarted}
      style={{ marginLeft: 1 + "em" }}>
      Cancel game
    </button>

    return (<React.Fragment>
      {gameButton}
      {cancelGameButton}
    </React.Fragment>)
  };
  
  return (
    <div className={styles.root}>
      <div className={styles.nameInput}>
        <input
          type="text"
          name="newPlayer"
          id="newPlayer"
          placeholder="New player name..."
          onChange={(event) => setPlayer(event.target.value)}
          onKeyUp={handleKeyPress}
          value={player}
        />
        <button onClick={addPlayer} disabled={!player || gameStarted}>
          Add player
        </button>
      </div>
      <div className={styles.startGame}>
        {displayGameButton()}
      </div>
      <div className={styles.title}>Players List</div>
      <div className={styles.playerList}>
        {players.map((player, index) => (
          <div key={index} className={styles.player}>
            <div>{player}</div>
            <div className={styles.trashIcon} hidden={gameStarted}>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  onRemovePlayerClicked(index);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameManager;
