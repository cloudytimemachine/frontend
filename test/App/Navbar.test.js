import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Navbar from '../../modules/Common/Navbar';

describe('<Navbar/>', function () {

  it('should have a brand', function () {
    let wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar-brand')).to.have.length(1);
  });

  it('should have 3 links', function () {
    let wrapper = shallow(<Navbar />);
    expect(wrapper.find('Link')).to.have.length(4);
  });
});
