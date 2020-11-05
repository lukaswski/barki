/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Contact from '../pages/Contact';

describe('<Contact />', () => {
  it('render Contatct information on website', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('Container').text()).to.contain('Kontakt do mnie!');
  });
});
