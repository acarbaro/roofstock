import React from 'react'
import { FiChevronLeft } from 'react-icons/fi';

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FiChevronLeft size={35} color={"#fff"} />
        </div>
    );
}