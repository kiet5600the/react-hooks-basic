import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../hooks/useMagicColor';
import "./magicColor.scss";

MagicColor.propTypes = {

};

function MagicColor() {
    const color = useMagicColor();
    return (
        <div className="magic-box" style={{ backgroundColor: color }}></div>
    );
}

export default MagicColor;