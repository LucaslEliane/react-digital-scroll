function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

var digitalNode = [];

for (var i = 0; i < 10; i += 1) {
    digitalNode.push(React.createElement(
        'p',
        { key: 'label-' + i },
        i
    ));
}

var DigitalItem = function (_React$Component) {
    _inherits(DigitalItem, _React$Component);

    function DigitalItem() {
        _classCallCheck(this, DigitalItem);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    DigitalItem.prototype.render = function render() {
        var _props = this.props,
            digital = _props.digital,
            height = _props.height;

        var num = +digital;

        var offset = '-' + parseInt(height, 10) * num + 'px';

        return React.createElement(
            'li',
            {
                style: {
                    height: height,
                    transform: 'translateY(' + offset + ')'
                },
                className: 'scroll-item'
            },
            digitalNode
        );
    };

    return DigitalItem;
}(React.Component);

export default DigitalItem;


DigitalItem.propTypes = {
    digital: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
};