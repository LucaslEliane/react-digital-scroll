import React from 'react';
import PropTypes from 'prop-types';

const digitalNode = [];

for (let i = 0; i < 10; i += 1) {
    digitalNode.push(
        <p key={`label-${i}`}>{i}</p>
    );
}

export default class DigitalItem extends React.Component {
    render() {
        const { digital, height } = this.props;
        const num = +digital;

        const offset = `-${parseInt(height, 10) * num}px`;


        return (
            <li
                style={{
                    height,
                    transform: `translateY(${offset})`
                }}
                className="scroll-item"
            >
                {digitalNode}
            </li>
        );
    }
}

DigitalItem.propTypes = {
    digital: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};