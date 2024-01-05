import React from 'react';
import styles from '../styles/GameButton.module.css'

const GameButton = () => {
    return (
        <div>
            <button className={styles.startButton}>Click for start</button>
        </div>
    );
};

export default GameButton;