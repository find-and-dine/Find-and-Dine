import React from 'react';
import { shallow } from 'enzyme';
import DisplaySidebar from '../client/Modals/DisplaySidebar';


import dummyData from './setup/sampleData.js'

const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <DisplaySidebar
      photos={dummyData.photo}
    />
  );
  expect(wrap.exists());
});
