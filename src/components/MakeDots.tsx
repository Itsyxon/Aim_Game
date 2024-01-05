import React from 'react';
import IDot from '../dotModel/dot';
import SingleDot from './SingleDot';
import styles from '../styles/MakeDots.module.css'

interface IDots {
    dots: IDot[]
    setDots: React.Dispatch<React.SetStateAction<IDot[]>>
    create: () => void
}

const MakeDots: React.FC<IDots> = ({ dots, setDots, create }: IDots) => {
    const deleteDot = (id: number) => {
        setDots(dots.filter((dot) => dot.id != id))
        create()
    }
    return (
        <div className={styles.dotsField}>
            {dots.map((dot) => (
                <SingleDot key={dot.id} dot={dot} dots={dots} setDots={setDots} deleteDot={deleteDot} />
            ))}
        </div>
    );
};

export default MakeDots;