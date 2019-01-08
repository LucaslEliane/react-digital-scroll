import React from 'react';
import PropTypes from 'prop-types';

import DigitalItem from './components/digital-item';
import Utils from './utils';
import './index.less';

export default class DigitalScroll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 'auto',
            ...Utils.formatPropsToState(props),
        };
        this.container = React.createRef();
    }

    componentDidMount() {
        const container = this.container.current;
        const height = container && container.style && container.style.height;
        this.setState({
            height,
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const prevDigital = prevState.digital;
        const nextDigital = nextProps.digital;

        if (prevDigital.length && +prevDigital.join('') === +nextDigital) {
            return null;
        }

        return {
            ...Utils.formatPropsToState(nextProps),
        };
    }

    renderDigitals = () => {
        const {
            digital,
            height,
        } = this.state;

        return digital.map((v, i) => (
            <DigitalItem digital={v} key={`digital-${i}`} height={height} />
        ));
    }

    render() {
        const { clazz, style } = this.props;

        return (
            <ul className={`scroll-container ${clazz}`} style={style} ref={this.container}>
                {this.renderDigitals()}
            </ul>
        );
    }
}

DigitalScroll.propTypes = {
    digital: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    length: PropTypes.number.isRequired,
    clazz: PropTypes.string,
    style: PropTypes.object,
};

DigitalScroll.defaultProps = {
    clazz: '',
    style: {},
};