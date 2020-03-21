import React from 'react';
import { shallow } from 'enzyme';
import OnHoverModal from '../client/HoverModals/OnHoverModal';


import dummyData from './setup/sampleData.js'

const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <OnHoverModal
      photos={dummyData.photo}
      image={dummyData.photo}
      leftClick={dummyFunction}
      rightClick={dummyFunction}
    />
  );
  expect(wrap.exists());
});
