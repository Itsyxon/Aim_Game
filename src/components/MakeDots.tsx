import React from 'react';
import IDot from '../dotModel/dot';
import SingleDot from './SingleDot';

interface IDots {
    dots: IDot[]
    setDots: React.Dispatch<React.SetStateAction<IDot[]>>
}

const MakeDots: React.FC<IDots> = ({ dots, setDots }: IDots) => {
    return (
        <div>
            {dots.map((dots) => (
                <SingleDot key={dots.id} />
            ))}
        </div>
    );
};

export default MakeDots;