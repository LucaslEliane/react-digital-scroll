var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import DigitalItem from './components/digital-item';
import Utils from './utils';

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
                return React.createElement(DigitalItem, { digital: v, key: 'digital-' + i, height: height });
            });
        };

        _this.state = _extends({
            height: 'auto'
        }, Utils.formatPropsToState(props));
        _this.container = React.createRef();
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

        return _extends({}, Utils.formatPropsToState(nextProps));
    };

    DigitalScroll.prototype.render = function render() {
        var _props = this.props,
            clazz = _props.clazz,
            style = _props.style;


        return React.createElement(
            'ul',
            { className: 'scroll-container ' + clazz, style: style, ref: this.container },
            this.renderDigitals()
        );
    };

    return DigitalScroll;
}(React.Component);

export default DigitalScroll;


DigitalScroll.propTypes = {
    digital: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    length: PropTypes.number.isRequired,
    clazz: PropTypes.string,
    style: PropTypes.object
};

DigitalScroll.defaultProps = {
    clazz: '',
    style: {}
};