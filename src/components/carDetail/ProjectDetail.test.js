import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme'

import { ProjectDetail } from './ProjectDetail'

configure({ adapter: new Adapter() });
describe('ProjectDetail', () => {
  const props = { project: { authhorId: 1 }, auth: { uid: 2 } }
  const projectDetail = shallow(<ProjectDetail {...props} />)
  // console.log(projectDetail.debug());
  it('Render projectDetail', () => {
    expect(projectDetail).toMatchSnapshot()
  })

  it('Update the orderFinished in `state`', () => {
    expect(projectDetail.state().orderFinished).toEqual(false)
  })


})

