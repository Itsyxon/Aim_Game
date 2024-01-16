import React, { useState } from 'react';
import styles from '../styles/GameSettings.module.css'
import IDot from '../dotModel/dot';

interface IProps {
    create: () => void;
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
    setDots: React.Dispatch<React.SetStateAction<IDot[]>>
    dots: IDot[]
}

const GameSettings: React.FC<IProps> = ({ create, counter, setCounter, setDots, dots }) => {
    const resetAll = (): void => {
        setCounter(0)
        setDots([])
    }
    const startAGame = () => {
        create()
        setCounter(0)

    }
    return (
        <div className={styles.settings}>
            <div className={styles.counter}>{counter >= 1 ? counter : ''}</div>
            <div className={styles.buttons}>
                {
                    dots.length === 0 ? (
                        <button className={`${styles.startButton}`} onClick={startAGame}>Start</button>
                    ) : (
                        ""
                    )
                }
                {
                    dots.length >= 1 ? (
                        <button className={styles.resetButton} onClick={resetAll}>Reset</button>
                    ) : (
                        ''
                    )
                }
            </div>

        </div>
    );
};

export default GameSettings;