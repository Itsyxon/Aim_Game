import React from 'react';

import styles from '../styles/GameSettings.module.css'
import IDot from '../dotModel/dot';

interface IProps {
    create: () => void;
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
    setDots: React.Dispatch<React.SetStateAction<IDot[]>>
}

const GameSettings: React.FC<IProps> = ({ create, counter, setCounter, setDots }: IProps) => {
    const resetAll = (): void => {
        setCounter(0)
        setDots([])
    }
    return (
        <div className={styles.settings}>
            <div className={styles.counter}>{counter}</div>
            <div className={styles.buttons}>
                <button className={styles.startButton} onClick={create}>Start</button>
                <button className={styles.resetButton} onClick={resetAll}>Reset</button>
            </div>
        </div>
    );
};

export default GameSettings;