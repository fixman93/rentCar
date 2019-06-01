import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { LastAddedItem } from './lastAddedItem'

configure({ adapter: new Adapter() });

describe('lastAddedItem', () => {
  const props = { project: { Currency: 20 } }
  const lastAddedItem = shallow(<LastAddedItem {...props} />)
  it('render lastAddedItem', () => {
    expect(lastAddedItem).toMatchSnapshot()
  })

  it('displays the currency from props', () => {
    expect(lastAddedItem.find('.currency').text()).toEqual('20')
  })

})