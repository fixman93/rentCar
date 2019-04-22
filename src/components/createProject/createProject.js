import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'

import NavBar from '../navbar/index'

class createProjects extends Component {

  state = {
    name: 'your name'
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProject(this.state.name)
  }
  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='name' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(null, mapDispatchToProps)(createProjects)