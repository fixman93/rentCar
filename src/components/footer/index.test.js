import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme'

import { Footer } from './index'

configure({ adapter: new Adapter() });

describe('Footer', () => {
  const footer = shallow(<Footer />)
  it('render footer', () => {
    expect(footer).toMatchSnapshot()
  })


})