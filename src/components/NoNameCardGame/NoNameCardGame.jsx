import React, { useState, useEffect } from 'react';
import PlayerManager from './PlayerManager';
import './NoNameCardGame.css';

function NoNameCardGame() {
    const [players, setPlayers] = useState([]);

    const onAddPlayerClicked = (player) => {
        setPlayers([...players, player]); 
    }
    return (
        <div className="root">
            <h1>No Name Card Game</h1>
            <div className='gameBody'>
                <PlayerManager onAddPlayerClicked={onAddPlayerClicked} />
            </div>
        </div>
    )
}

export default NoNameCardGame;