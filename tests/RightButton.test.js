import React from 'react';
import { shallow } from 'enzyme';
import RightButton from '../client/HoverModals/RightButton';

//TODO Change name
import dummyData from './setup/sampleData.js'

//make dummyFunction so component can mount to DOM
const dummyArray = [dummyData]
const dummyFunction = (ex) => (ex);

/*Test not complete, need top revisit photoIndex */
it('mounts', () => {
  const wrap = shallow(
    <RightButton
      id="right-button"
      rightClick={dummyFunction}
    />
  );
  expect(wrap.exists());
});
