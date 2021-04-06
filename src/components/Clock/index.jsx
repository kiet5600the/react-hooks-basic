import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};

function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {

    useEffect(() => {
        const timeStringInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(timeStringInterval)
        };
    }, []);

    const [timeString, setTimeString] = useState('');
    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

export default Clock;