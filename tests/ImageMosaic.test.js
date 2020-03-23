import React from 'react';
import { shallow } from 'enzyme';
import ImageMosaic from '../client/components/ImageMosaic';

//TODO Change name
import dummyData from './setup/sampleData.js'

//make dummyFunction so component can mount to DOM
const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <ImageMosaic
      photos={dummyData.photo}
      openModal={dummyFunction}
    />
  );
  expect(wrap.exists());
});
