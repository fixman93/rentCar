import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme'

import { Home } from './index'

configure({ adapter: new Adapter() });

describe('Homepage', () => {
  const home = shallow(<Home />)
  it('render homepage', () => {
    expect(home).toMatchSnapshot()
  })

  describe('When change select type', () => {
    const city = 'Novi Sad'
    beforeEach(() => {
      home.find('.search-cities').simulate('change', { target: { value: city } })
    })
    it('Update the city in `state`', () => {
      expect(home.state().searcCity.target.value).toEqual(city)
    })
  })

})