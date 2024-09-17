import React, { useState } from "react";
import styles from "./PlayerManager.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function PlayerManager({ onAddPlayerClicked, onRemovePlayerClicked, players }) {
  const [player, setPlayer] = useState("");

  const addPlayer = () => {
    console.log("Adding player...");
    !players.includes(player)
      ? onAddPlayerClicked(player)
      : alert("Player already exists");
    setPlayer("");
  };

  const removePlayer = (index) => {
    console.log("Removing index...", index);
    onRemovePlayerClicked(player);
  };

  const handleInputChange = (event) => {
    setPlayer(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");

      addPlayer();
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.nameInput}>
        <input
          type="text"
          name="newPlayer"
          id="newPlayer"
          placeholder="New player name..."
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          value={player}
        />
        <button onClick={addPlayer} disabled={!player}>
          Add player
        </button>
      </div>
      <div className={styles.title}>Players List</div>
      <div className={styles.playerList}>
        {players.map((player, index) => (
          <div key={index} className={styles.player}>
            <div>{player}</div>
            <div className={styles.trashIcon}>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  removePlayer(index);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerManager;
