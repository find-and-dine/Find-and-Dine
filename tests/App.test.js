import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';

//TODO Change name
import dummyData from './setup/sampleData.js'

//make dummyFunction so component can mount to DOM
const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <App
      photos={dummyData}
      onClick={dummyFunction}
    />
  );
  expect(wrap.exists());
  expect('photos' in wrap.state()).toEqual(dummyData);
});
