'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var digitalNode = [];

for (var i = 0; i < 10; i += 1) {
    digitalNode.push(_react2.default.createElement(
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

        return _react2.default.createElement(
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
}(_react2.default.Component);

exports.default = DigitalItem;


DigitalItem.propTypes = {
    digital: _propTypes2.default.string.isRequired,
    height: _propTypes2.default.string.isRequired
};
module.exports = exports['default'];