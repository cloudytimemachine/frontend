import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../modules/App';

describe('<App/>', function () {

  it('should have a navbar', function () {
    let wrapper = mount(<App />);
    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('should have a footer', function () {
    let wrapper = mount(<App />);
    expect(wrapper.find('footer')).to.have.length(1);
  });
});
