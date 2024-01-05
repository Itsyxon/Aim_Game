import React, { useState } from 'react';
import styles from '../styles/SingleDot.module.css';
import IDot from '../dotModel/dot';

interface IProps {
    dot: IDot
    dots: IDot[]
    setDots: React.Dispatch<React.SetStateAction<IDot[]>>
    deleteDot: (id: number) => void
}

const SingleDot = ({ dot, dots, setDots, deleteDot }: IProps) => {
    const [randTop, setRandTop] = useState(Math.floor(Math.random() * 90))
    const [randLeft, setRandLeft] = useState(Math.floor(Math.random() * 90))

    return (
        <div className={`${styles.singleDot}`} onClick={() => deleteDot(dot.id)} style={{ top: `${randTop}%`, left: `${randLeft}%` }} >
        </div>
    );
};

export default SingleDot;