import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { LastAddedItem } from './lastAddedItem'

configure({ adapter: new Adapter() });

describe('lastAddedItem', () => {
  const lastAddedItem = shallow(<LastAddedItem />)
  it('render lastAddedItem', () => {
    expect(lastAddedItem).toMatchSnapshot()
  })


})