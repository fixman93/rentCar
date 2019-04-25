import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
    this.props.createProject(this.state)
    this.props.history.push('/dashboard')
  }
  render() {
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='carName' value={this.state.carName} onChange={this.handleChange} placeholder='Car Name' />
          <input type='text' name='carPrice' value={this.state.carPrice} onChange={this.handleChange} placeholder='Car Price' />
          <textarea name='carDescription' value={this.state.carDescription} onChange={this.handleChange} placeholder='Car Description' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(createProjects)