import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { LastAdded } from './lastAdded'

configure({ adapter: new Adapter() });

describe('LastAdded', () => {
  // const props = { projects: {} }
  const lastAdded = shallow(<LastAdded />)
  console.log(lastAdded.debug());
  it('render LastAdded', () => {
    expect(lastAdded).toMatchSnapshot()
  })

  // it('creates an LastAddedItem', () => {
  //   expect(lastAdded.find('<Col>').exists()).toBe(true)
  // })


})