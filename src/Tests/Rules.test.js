/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Rules from '../pages/Rules';

describe('<Rules />', () => {
  it('render text information on website', () => {
    const wrapper = shallow(<Rules />);
    expect(wrapper.find('Container').text()).to.contain('Regulamin używania obroży Barki');
  });
});
