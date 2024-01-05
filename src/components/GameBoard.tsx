import React, { useState } from 'react';
import styles from '../styles/GameBoard.module.css'
import MakeDots from './MakeDots';
import IDot from '../dotModel/dot';
import GameSettings from './GameSettings';

const GameBoard = () => {
    const [dots, setDots] = useState<IDot[]>([])
    const [counter, setCounter] = useState<number>(0)
    const uniqueId = Date.now() + Math.random()
    const create = () => {
        setDots([{ id: uniqueId }])
    }
    return (
        <>
            <GameSettings create={create} counter={counter} setCounter={setCounter} setDots={setDots} />
            <div className={styles.gameboard}>
                <MakeDots dots={dots} setDots={setDots} create={create} counter={counter} setCounter={setCounter} />
            </div>
        </>
    );
};

export default GameBoard;