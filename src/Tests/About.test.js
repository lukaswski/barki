/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import About from '../pages/About';

describe('<About />', () => {
  it('render text information on website', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('Container').text()).to.contain('About');
  });
});
