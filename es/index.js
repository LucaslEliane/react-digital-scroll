import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Test = function (_Component) {
    _inherits(Test, _Component);

    function Test(props) {
        _classCallCheck(this, Test);

        var _this = _possibleConstructorReturn(this, (Test.__proto__ || _Object$getPrototypeOf(Test)).call(this, props));

        _this.clk = _this.clk.bind(_this);
        return _this;
    }

    _createClass(Test, [{
        key: 'clk',
        value: function clk() {
            console.log('click');
        }
    }, {
        key: 'render',
        value: function render() {
            var name = this.props.name;

            return React.createElement(
                'div',
                { className: 'test', onClick: this.clk },
                'Hello ',
                name
            );
        }
    }]);

    return Test;
}(Component);

Test.propTypes = {
    name: PropTypes.string
};
export default Test;