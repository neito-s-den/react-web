import React, { useState } from "react";
import styles from "./ScoreBoard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScoreBoard({ players }) {
  return (
    <div className={styles.root}>
      {players.map((player, index) => (
        <div key={index} className={styles.playerColumn}>
          <div className={styles.playerName}>{player}</div>
          <div className={styles.playerScore}></div>
        </div>
      ))}
    </div>
  );
}

export default ScoreBoard;
