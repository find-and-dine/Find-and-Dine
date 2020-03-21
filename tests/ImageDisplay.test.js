import React from 'react';
import { shallow } from 'enzyme';
import ImageDisplay from '../client/Modals/ImageDisplay';


import dummyData from './setup/sampleData.js'

const dummyFunction = (ex) => (ex);

it('mounts', () => {
  const wrap = shallow(
    <ImageDisplay
      photos={dummyData.photo}
    />
  );
  expect(wrap.exists());
  expect(wrap.containsMatchingElement(  <div className="image-viewer-container">
  <img
    src={image.url}
    alt={image.caption}
    className="image-display"
  />
</div>)).toBeTruthy();
});
