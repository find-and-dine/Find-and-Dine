import React from 'react';
import { shallow } from 'enzyme';
import DisplayFocusedImage from '../client/Modals/DisplayFocusedImage';


import dummyData from './setup/sampleData.js'


const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <DisplayFocusedImage
      photos={dummyData.photo}
      photoIndex={dummyData.id}
    />
  );
  expect(wrap.exists());
});
