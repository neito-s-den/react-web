import React, { useState, useEffect } from 'react';
import PlayerManager from './PlayerManager';
import ScoreBoard from './ScoreBoard';
import './NoNameCardGame.css';

function NoNameCardGame() {
    const [players, setPlayers] = useState([]);

    const onAddPlayerClicked = (player) => {
        console.log('Adding player from parent ...');
        setPlayers([...players, player]); 
    }

    const onRemovePlayerClicked = (i) => {
        console.log('Removing player from parent ...', i);
        let newPlayers = [...players];
        newPlayers.splice(i, 1);
        setPlayers(newPlayers);
    };
    return (
        <div className="root">
            <h1>No Name Card Scoreboard</h1>
            <div className='gameBody'>
                <PlayerManager onAddPlayerClicked={onAddPlayerClicked} onRemovePlayerClicked={onRemovePlayerClicked} players={players} />
                <ScoreBoard players={players} />
            </div>
        </div>
    )
}

export default NoNameCardGame;