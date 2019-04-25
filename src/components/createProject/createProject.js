import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProject } from '../../store/actions/projectAction'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    console.log('staeeeeee', this.state)
    return (
      <div>
        <NavBar />
        <Container>
          <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Car Name</Form.Label>
              <Form.Control type="text" name='carName' value={this.state.carName} onChange={this.handleChange} placeholder="Car Name" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Car Price</Form.Label>
              <Form.Control type="text" name='carPrice' value={this.state.carPrice} onChange={this.handleChange} placeholder='Car Price' />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" name='carDescription' value={this.state.carDescription} onChange={this.handleChange} placeholder='Car Description' />
            </Form.Group>
            <Button onSubmit={this.handleSubmit} variant="primary">Submit</Button>
          </Form>
        </Container>
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