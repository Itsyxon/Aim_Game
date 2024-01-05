import React from 'react';
import IDot from '../dotModel/dot';
import SingleDot from './SingleDot';
import styles from '../styles/MakeDots.module.css'
interface IDots {
    dots: IDot[]
    setDots: React.Dispatch<React.SetStateAction<IDot[]>>
    create: () => void
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
}

const MakeDots: React.FC<IDots> = ({ dots, setDots, create, counter, setCounter }: IDots) => {
    const deleteDot = (id: number) => {
        setDots(dots.filter((dot) => dot.id !== id))
        setCounter(counter + 1)
        create()
    }
    return (
        <div>
            {dots.map((dot) => (
                <SingleDot key={dot.id} dot={dot} deleteDot={deleteDot} />
            ))}
        </div>
    );
};

export default MakeDots;