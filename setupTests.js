import React from 'react';
import ReactDOM from 'react-dom';
// import Cart from '../components/Cart';
// import CartItem from '../components/Cart';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
