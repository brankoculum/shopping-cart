import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Shop from '../components/Shop';

Enzyme.configure({ adapter: new Adapter() });

describe('Shop', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Shop />);
  })

  it('is an app', () => {
    expect(
      wrapper.find('#app').length
    ).toBe(1)
  })

  it('has a header', () => {
    expect(
      wrapper.find('Header').length
    ).toBe(1)
  })
});
