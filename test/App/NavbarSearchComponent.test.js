import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import NavbarSearchComponent from '../../modules/App/NavbarSearchComponent';

describe('<NavbarSearchComponent/>', function () {

  it('should have a text input', function () {
    let wrapper = mount(<NavbarSearchComponent />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a search button', function () {
    let wrapper = mount(<NavbarSearchComponent />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
