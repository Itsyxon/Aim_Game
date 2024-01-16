import React, { useState } from 'react';
import styles from '../styles/GameSettings.module.css'
import IDot from '../dotModel/dot';
import GameOver from './GameOver';

interface IProps {
    create: () => void;
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
    setDots: React.Dispatch<React.SetStateAction<IDot[]>>
}

const GameSettings: React.FC<IProps> = ({ create, counter, setCounter, setDots }: IProps) => {
    const resetAll = (): void => {
        setCounter(-1)
        setDots([])
    }
    const startAGame = () => {
        create()
        setCounter(0)

    }
    return (
        <div className={styles.settings}>
            <div className={styles.counter}>{counter >= 0 ? counter : ''}</div>
            <div className={styles.buttons}>
                <button className={`${styles.startButton}`} onClick={startAGame}>Start</button>
                <button className={styles.resetButton} onClick={resetAll}>Reset</button>
            </div>

        </div>
    );
};

export default GameSettings;