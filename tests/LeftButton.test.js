import React from 'react';
import { shallow } from 'enzyme';
import LeftButton from '../client/HoverModals/LeftButton';

//TODO Change name
import dummyData from './setup/sampleData.js'

//make dummyFunction so component can mount to DOM
const dummyArray = [dummyData]
const dummyFunction = (ex) => (ex);

/*Test not complete, need top revisit photoIndex */
it('mounts', () => {
  const wrap = shallow(
    <LeftButton
      id="left-button"
      leftClick={dummyFunction}
    />
  );
  expect(wrap.exists());
});
