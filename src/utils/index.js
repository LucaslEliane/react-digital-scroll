const paddingZero = (num, length) => (Array(length).join('0') + num).slice(-length);

const formatPropsToState = (props = {}) => {
    const {
        digital,
        length,
    } = props;

    const digitalString = `${digital}`;

    if (digitalString.length >= length) {
        return {
            length: digitalString.length,
            digital: digitalString.split(''),
        };
    }

    return {
        length,
        digital: paddingZero(digitalString, length).split(''),
    };
};

export default {
    formatPropsToState,
};