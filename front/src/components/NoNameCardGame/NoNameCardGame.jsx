import React, { useState, useEffect } from "react";
import GameManager from "./GameManager";
import ScoreBoard from "./ScoreBoard";
import "./NoNameCardGame.css";

function NoNameCardGame() {
  const [players, setPlayers] = useState(["Will", "Sak", "Mic", "Red"]);
  const [gameStarted, setGameStarted] = useState(false);

  const onAddPlayerClicked = (player) => {
    console.log("Adding player from parent ...");
    setPlayers([...players, player]);
  };

  const onRemovePlayerClicked = (i) => {
    console.log("Removing player from parent ...", i);
    let newPlayers = [...players];
    newPlayers.splice(i, 1);
    setPlayers(newPlayers);
  };
  return (
    <div className="root">
      <h1>No Name Card Scoreboard</h1>
      <div className="gameBody">
        <GameManager
          onAddPlayerClicked={onAddPlayerClicked}
          onRemovePlayerClicked={onRemovePlayerClicked}
          players={players}
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
        />
        <ScoreBoard players={players} />
      </div>
    </div>
  );
}

export default NoNameCardGame;
