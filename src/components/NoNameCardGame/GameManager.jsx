import React, { useState } from "react";
import styles from "./GameManager.module.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import RoundModal from "./RoundModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function GameManager({
  onAddPlayerClicked,
  onRemovePlayerClicked,
  players,
  gameStarted,
  setGameStarted,
}) {
  const [player, setPlayer] = useState("");
  const [confirmModalState, setConfirmModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
  });
  const [roundModalState, setRoundModalState] = useState({
    isOpen: false,
  });

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
    setRoundModalState({
      isOpen: true,
    })
  };

  const cancelGame = () => {
    console.log("canceling game");
    setConfirmModalState({
      isOpen: true,
      title: "Cancel Game ?",
      message: "Are you sure you want to cancel the game ?",
    });
  };

  const displayGameButton = () => {
    const config = {
      displayText: gameStarted ? "Add Round" : "Start game",
      onClick: gameStarted
        ? () => {
            addRound();
          }
        : () => setGameStarted(true),
    };
    let gameButton = (
      <button onClick={config.onClick} disabled={players.length === 0}>
        {config.displayText}
      </button>
    );
    let cancelGameButton = (
      <button
        onClick={cancelGame}
        disabled={players.length === 0}
        hidden={!gameStarted}
        style={{ marginLeft: 1 + "em" }}
      >
        Cancel game
      </button>
    );

    return (
      <React.Fragment>
        {gameButton}
        {cancelGameButton}
      </React.Fragment>
    );
  };

  const resetGame = () => {
    console.log("resetting game");
    setGameStarted(false);
    setPlayer("");
    setConfirmModalState({
      isOpen: false,
      title: "",
      message: "",
    });
  };
  return (
    <div className={styles.root}>
      <ConfirmationModal
        modalState={confirmModalState}
        onClose={(choice) => 
          choice
            ? resetGame()
            :
          setConfirmModalState({
            isOpen: false,
            title: "",
            message: "",
          })
        }
      />
      <RoundModal modalState={roundModalState} onClose={(data) => {
        data.cancel ? setRoundModalState({}) : validateRound(data);
      }} players={players} />
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
      <div className={styles.startGame}>{displayGameButton()}</div>
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
