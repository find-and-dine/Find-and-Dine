import React from 'react';
import { shallow } from 'enzyme';
import GridMosaic from '../client/components/GridMosaic';

//TODO Change name
import dummyData from './setup/sampleData.js'

//make dummyFunction so component can mount to DOM
const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <GridMosaic
      photo={dummyData.photo}
      openModal={dummyFunction}
    />
  );
  expect(wrap.exists());
});
