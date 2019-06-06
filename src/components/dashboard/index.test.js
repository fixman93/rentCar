import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { Dashboard } from './index'

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
  const mockRemove = jest.fn()
  const props = { addFeedback: mockRemove, projects: {} }
  const dashboard = shallow(<Dashboard {...props} />)
  console.log(dashboard.debug())
  it('render Dashboard', () => {
    expect(dashboard).toMatchSnapshot()
  })

  describe('Add feedback on click', () => {
    beforeEach(() => {
      dashboard.find('.review-number').simulate('click')
    })

    it('Call the `addFeedback` callback', () => {
      expect(mockRemove).toHaveBeenCalledWith('1', '1')
    })
  })


})