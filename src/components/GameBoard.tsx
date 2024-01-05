import React, { useState } from 'react';
import styles from '../styles/GameBoard.module.css'
import MakeDots from './MakeDots';
import IDot from '../dotModel/dot';



const GameBoard = () => {
    const [dots, setDots] = useState<IDot[]>([])
    const uniqueId = Date.now() + Math.random()
    const create = () => {
        setDots([{ id: uniqueId }])
    }
    return (
        <>
            <button className={styles.startButton} onClick={create}>Start a game!</button>
            <div className={styles.gameboard}>
                <MakeDots dots={dots} setDots={setDots} create={create} />
            </div>
        </>
    );
};

export default GameBoard;