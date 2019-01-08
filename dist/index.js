'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Test = function (_Component) {
    (0, _inherits3.default)(Test, _Component);

    function Test(props) {
        (0, _classCallCheck3.default)(this, Test);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

        _this.clk = _this.clk.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Test, [{
        key: 'clk',
        value: function clk() {
            console.log('click');
        }
    }, {
        key: 'render',
        value: function render() {
            var name = this.props.name;

            return _react2.default.createElement(
                'div',
                { className: 'test', onClick: this.clk },
                'Hello ',
                name
            );
        }
    }]);
    return Test;
}(_react.Component);

Test.propTypes = {
    name: _propTypes2.default.string
};
exports.default = Test;
module.exports = exports['default'];