import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import CaptureListContainer from '../../modules/Captures/CaptureListContainer';

describe('<CaptureListContainer />', function () {
  it('holds the captures list', function () {
    let wrapper = shallow(<CaptureListContainer />);
    expect(wrapper.find('CaptureList')).to.have.length(1);
  });
});
