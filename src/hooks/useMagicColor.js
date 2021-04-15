import React, { useEffect, useRef, useState } from 'react';


function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }

    const newColor = COLOR_LIST[newIndex];
    return newColor;
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('first color: ', color)
            console.log('change color: ', colorRef.current)
            const newColor = randomColor(colorRef.current);
            colorRef.current = newColor;
            setColor(newColor);
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;