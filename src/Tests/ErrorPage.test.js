/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ErrorPage from '../pages/ErrorPage';

describe('<ErrorPage />', () => {
  it('render text information on website', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper.find('Container').text()).to.contain('Ops! taka strona nie istnieje!');
  });
});
