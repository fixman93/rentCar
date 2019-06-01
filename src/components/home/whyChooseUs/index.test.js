import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { WhyChooseUs } from './index'

configure({ adapter: new Adapter() });

describe('WhyChooseUs', () => {
  const whyChooseUs = shallow(<WhyChooseUs />)
  it('render WhyChooseUs', () => {
    expect(whyChooseUs).toMatchSnapshot()
  })


})