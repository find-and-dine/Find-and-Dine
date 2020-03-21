import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../client/HoverModals/Carousel';

//TODO Change name
import dummyData from './setup/sampleData.js'

//make dummyFunction so component can mount to DOM
const dummyArray = [dummyData]
const dummyFunction = (ex) => (ex);

/*Test not complete, need top revisit photoIndex */
it('mounts', () => {
  const wrap = shallow(
    <Carousel
      photos={dummyArray}
      images={dummyData}
      photoIndex={0}
    />
  );
  expect(wrap.exists());
});
