import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import RequestCaptureBox from '../../modules/App/RequestCaptureBox';

describe('<RequestCaptureBox/>', function () {

  it('should have a requestcaptureform', function () {
    let wrapper = shallow(<RequestCaptureBox />);
    expect(wrapper.find('RequestCaptureForm')).to.have.length(1);
  });
});
