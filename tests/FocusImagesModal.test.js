import React from 'react';
import { shallow } from 'enzyme';
import FocusedImagesModal from '../client/Modals/FocusedImagesModal';


import dummyData from './setup/sampleData.js'

const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <FocusedImagesModal
      closeModal={dummyFunction}
      photos={dummyData.photo}
    />
  );
  expect(wrap.exists());
});
