import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { LastAdded } from './lastAdded'

configure({ adapter: new Adapter() });

describe('LastAdded', () => {
  const lastAdded = shallow(<LastAdded />)
  it('render LastAdded', () => {
    expect(lastAdded).toMatchSnapshot()
  })

  it('creates an LastAddedItem', () => {
    expect(lastAdded.find('.LastAddedItem').exists()).toBe(false)
  })


})