import React, { useState } from "react";
import styles from "./RoundModal.module.css";

const RoundModal = ({ modalState, onClose, players }) => {
    if (!modalState.isOpen) return null;

    const [scores, setScores] = useState(Array(players.length).fill(''));

    const handleScoreChange = (index, value) => {
        const newScores = [...scores];
        newScores[index] = value;
        setScores(newScores);
    }
    
    const allScoresFilled = scores.every(score => score !== '');

    return (
        <>
            <div
                className={styles.root}
                onClick={() => {
                    onClose();
                }}
            >
                <div className={styles.body} onClick={(event) => { event.stopPropagation(); }}>
                    <div className={styles.title}>Add score for each player</div>
                    <div className={styles.addScorePanel}>
                        {players.map((player, index) => (
                            <div key={index} className={styles.playerScore}>
                                <div>{player}</div>
                                <input
                                    type="number"
                                    name={`player${index}`}
                                    id={`player${index}`}
                                    placeholder="Score"
                                    onChange={(event) => handleScoreChange(index, event.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={() => { onClose({ cancel: false }) }}>Add score</button>
                        <button onClick={() => { onClose({ cancel: true }) }}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoundModal;
