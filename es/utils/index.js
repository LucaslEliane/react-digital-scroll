var paddingZero = function paddingZero(num, length) {
    return (Array(length).join('0') + num).slice(-length);
};

var formatPropsToState = function formatPropsToState() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var digital = props.digital,
        length = props.length;


    var digitalString = '' + digital;

    if (digitalString.length >= length) {
        return {
            length: digitalString.length,
            digital: digitalString.split('')
        };
    }

    return {
        length: length,
        digital: paddingZero(digitalString, length).split('')
    };
};

export default {
    formatPropsToState: formatPropsToState
};