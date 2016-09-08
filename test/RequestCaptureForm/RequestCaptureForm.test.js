import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import RequestCaptureForm from '../../modules/RequestCaptureForm/RequestCaptureForm';

describe('<RequestCaptureForm/>', function () {

  it('should have a text input', function () {
    let wrapper = shallow(<RequestCaptureForm />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a submit button', function () {
    let wrapper = shallow(<RequestCaptureForm />);
    expect(wrapper.find('button')).to.have.length(1);
  });

});
