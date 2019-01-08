import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DigitalScroll from '../src/index';
import DigitalItem from '../src/components/digital-item/index';

configure({ adapter: new Adapter() });

describe('digital-scroll', () => {
    test('situation: simple scroll', () => {
        const wrapper = mount(
            <DigitalScroll
                clazz="wrapper"
                digital={12}
                length={10}
            />
        );

        expect(wrapper.find(DigitalItem).length).toBe(10);
    });

    test('situation: digital\'s length is longer than the length property', () => {
        const wrapper = mount(
            <DigitalScroll
                clazz="wrapper"
                digital={200000}
                length={4}
            />
        );

        expect(wrapper.find(DigitalItem).length).toBe(6);
    });

    test('situation: DigitalScroll property has been changed', () => {
        const wrapper = mount(
            <DigitalScroll
                clazz="wrapper"
                digital={2000}
                length={4}
            />
        );

        wrapper.setProps({
            digital: 2040,
        });

        const childProps = wrapper.find(DigitalItem).at(2).props();

        expect(childProps.digital).toBe('4');
    });
});
