import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

beforeEach(() => {
  const wrapped = shallow(<App/>);
});

it('renders', () => {
  expect(wrapped);0
}) 