import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Layout from '../modules/Layout';

describe('<Layout/>', function () {

  it('should have a navbar', function () {
    let wrapper = shallow(<Layout />);
    expect(wrapper.find('Navbar')).to.have.length(1);
  });

  it('should have a footer', function () {
    let wrapper = shallow(<Layout />);
    expect(wrapper.find('footer')).to.have.length(1);
  });
});
