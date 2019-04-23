import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'

import NavBar from '../navbar/index'

class createProjects extends Component {

  state = {
    carName: '',
    carPrice: '',
    carDescription: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
          <input type='text' name='carName' placeholder='Car Name' />
          <input type='text' name='carPrice' placeholder='Car Price' />
          <textarea name='cadDescription' placeholder='Car Description' />
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