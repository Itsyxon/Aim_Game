import React, { useState } from 'react';
import styles from '../styles/GameBoard.module.css'
import SingleDot from './SingleDot';
import MakeDots from './MakeDots';
import IDot from '../dotModel/dot';


const GameBoard = () => {
    const [dots, setDots] = useState<IDot[]>([])
    const create = () => {
        setDots([...dots, { id: Date.now() }])
    }
    return (
        <div className={styles.gameboard}>
            <button onClick={create}>Создать кнопку</button>
            <MakeDots dots={dots} setDots={setDots} />
        </div>
    );
};

export default GameBoard;