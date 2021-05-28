import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FiChevronRight size={35} color={"#fff"} />
        </div>
    );
}