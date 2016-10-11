import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import CaptureList from '../../modules/Captures/CaptureList';

describe('<CaptureList />', function () {
  it('returns a captures table', function () {
    let data = [];
    let wrapper = shallow(<CaptureList data={data} />);
    expect(wrapper.find('table')).to.have.length(1);
  });
});
