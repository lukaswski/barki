/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotLogged from '../pages/NotLogged';

describe('<NotLogged />', () => {
  it('render text information on website', () => {
    const wrapper = shallow(<NotLogged />);
    expect(wrapper.find('Container').text()).to.contain('Nie jesteś zalogowany!');
  });
});
