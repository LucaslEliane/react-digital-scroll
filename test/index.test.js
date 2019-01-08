import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Test from '../src/index';

configure({ adapter: new Adapter() });

describe('shallow', () => {
    test('Test show', () => {
        const app = shallow(<Test name="Tom" />);
        expect(app.find('.test').text()).toBe('Hello Tom ');
    });
    test('Test click', () => {
        const app = shallow(<Test name="Tom" />);
        app.find('.test').simulate('click');
        expect(app.find('.test').text()).toBe('Hello Tom click');
    });
    test('Test component', () => {
        const app = render(<Test name="Tom" title="alert" />);
        expect(app.find('.message').text()).toBe('alert');
    });
    test('Test props', () => {
        const app = mount(<Test name="Tom" />);
        expect(app.props().name).toBe('Tom');
    });
});