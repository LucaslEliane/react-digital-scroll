'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _digitalItem = require('./components/digital-item');

var _digitalItem2 = _interopRequireDefault(_digitalItem);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitalScroll = function (_React$Component) {
    _inherits(DigitalScroll, _React$Component);

    function DigitalScroll(props) {
        _classCallCheck(this, DigitalScroll);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.renderDigitals = function () {
            var _this$state = _this.state,
                digital = _this$state.digital,
                height = _this$state.height;


            return digital.map(function (v, i) {
                return _react2.default.createElement(_digitalItem2.default, { digital: v, key: 'digital-' + i, height: height });
            });
        };

        _this.state = _extends({
            height: 'auto'
        }, _utils2.default.formatPropsToState(props));
        _this.container = _react2.default.createRef();
        return _this;
    }

    DigitalScroll.prototype.componentDidMount = function componentDidMount() {
        var container = this.container.current;
        var height = container && container.style && container.style.height;
        this.setState({
            height: height
        });
    };

    DigitalScroll.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var prevDigital = prevState.digital;
        var nextDigital = nextProps.digital;

        if (prevDigital.length && +prevDigital.join('') === +nextDigital) {
            return null;
        }

        return _extends({}, _utils2.default.formatPropsToState(nextProps));
    };

    DigitalScroll.prototype.render = function render() {
        var _props = this.props,
            clazz = _props.clazz,
            style = _props.style;


        return _react2.default.createElement(
            'ul',
            { className: 'scroll-container ' + clazz, style: style, ref: this.container },
            this.renderDigitals()
        );
    };

    return DigitalScroll;
}(_react2.default.Component);

exports.default = DigitalScroll;


DigitalScroll.propTypes = {
    digital: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    length: _propTypes2.default.number.isRequired,
    clazz: _propTypes2.default.string,
    style: _propTypes2.default.object
};

DigitalScroll.defaultProps = {
    clazz: '',
    style: {}
};
module.exports = exports['default'];