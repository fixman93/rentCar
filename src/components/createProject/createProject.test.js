

import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure, mount } from 'enzyme'

import { CreateProjects } from './createProject'

configure({ adapter: new Adapter() });
describe('Loot', () => {
  let props = { balance: 10, bitcoin: {} }
  let createProjects = shallow(<CreateProjects {...props} />)

  it('renders propertly', () => {
    expect(createProjects).toMatchSnapshot()
  })
  // describe('when mounted', () => {

  //   let props = { balance: 10, bitcoin: {} }
  //   const mockCreateProjects = jest.fn()
  //   beforeEach(() => {
  //     props.createProjects = mockCreateProjects
  //     createProjects = mount(<CreateProject {...props} />)
  //   })
  //   it('dispatches the `createProject()` method it receives from props', () => {
  //     expect(mockCreateProjects).toHaveBeenCalled()
  //   })
  // })
})