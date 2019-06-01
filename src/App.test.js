import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme'

import App from './App'

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />)
  it('render propertly App', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a  NavBar component', () => {
    expect(app.find('Connect(NavBar)').exists()).toBe(true)
  })

  it('contains a Footer component', () => {
    expect(app.find('Footer').exists()).toBe(true)
  })
})