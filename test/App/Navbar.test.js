import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Navbar from '../../modules/App/Navbar';

describe('<Navbar/>', function () {

  it('should have a brand', function () {
    let wrapper = mount(<Navbar />);
    expect(wrapper.find('.navbar-brand')).to.have.length(1);
  });

  it('should have 3 links', function () {
    let wrapper = mount(<Navbar />);
    expect(wrapper.find('Link')).to.have.length(3);
  });
});
