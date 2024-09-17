import React, { useState, useEffect } from 'react';
import styles from './PlayerManager.module.css';

function PlayerManager(onAddPlayerClicked) {
    const [player, setPlayer] = useState("");

    const addPlayer = () => {
        console.log("Adding player...");
        onAddPlayerClicked(player);
    }

    const handleInputChange = (event) => {
        setPlayer(event.target.value);
    };

    return (
        <div className={styles.root}>
            <div className={styles.nameInput}>
                <input type="text" name="newPlayer" id="newPlayer" placeholder='New player name...' onChange={handleInputChange} value={player} />
                <button onClick={addPlayer}>Add player</button>
            </div>
        </div>
    )
}

export default PlayerManager;