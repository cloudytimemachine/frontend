import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Capture from '../../modules/Captures/Capture';

describe('<Capture />', function () {

  let capture = {  "createdAt": "2016-10-11T14:51:05.755Z",
                    "host": "cnn.com",
                    "id": "d6635b48-cc9e-42ae-8cfa-04704155f256",
                    "originalImage": "https://storage.googleapis.com/waybackmachine_default/cnn.com/_1476197465895.png",
                    "path": "/",
                    "requestedUrl": "http://cnn.com",
                    "status": "SUCCESSFUL",
                    "thumbnailImage": "https://storage.googleapis.com/waybackmachine_default/cnn.com/_1476197465895_thumb.png",
                    "updatedAt": "2016-10-11T14:51:31.121Z" }

  it('returns a table row', function () {
    let wrapper = shallow(<Capture key={capture.id} capture={capture} />);
    expect(wrapper.find('tr.capture')).to.have.length(1);
  });

  it('should have a link to Capture Details ', function () {
    let wrapper = shallow(<Capture key={capture.id} capture={capture} />);
    expect(wrapper.find('Link')).to.have.length(1);
  });
});
