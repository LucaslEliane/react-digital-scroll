import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import appCss from '../src/index.less';
import DigitalScroll from '../src/index';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            supply: 100
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.increaseSupply();
        }, 3000);
    }

    increaseSupply = () => {
        const { supply } = this.state;

        this.setState({
            supply: supply + 11
        });
    }

    render() {
        const { supply } = this.state;

        return (
            <div name="Tom">
                <DigitalScroll digital={supply} length={10} clazz="scroll" style={{
                    width: '200px',
                    height: '40px',
                }} />
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('J_wrap')
);