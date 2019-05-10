import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProject } from '../../store/actions/projectAction'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import NavBar from '../navbar/index'
import bg_cars from '../../assets/bg-cars.jpg'

import './createProject.scss'

class createProjects extends Component {



  constructor(props) {
    super(props)
    this.state = {
      carName: '',
      carPrice: '',
      carDescription: '',
      picture: null,
      pictureUrl: null
    }
    this.displayPicture = this.displayPicture.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/dashboard')
  }

  displayPicture(event) {
    let reader = new FileReader();
    let file = event.target.files[0]
    console.log('FILE:', file)
    reader.onloadend = () => {
      this.setState({
        picture: file,
        pictureUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }
  render() {
    const sectionStyle = {
      backgroundImage: `url(${bg_cars})`
    };
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    console.log('staeeeeee', this.state)

    return (
      <div>
        <NavBar />
        <section className='hero'>
          <div className='container'>
            <h1>Add Car</h1>
            <ul className='hero-links'>
              <li><Link to='/'>Home</Link> </li>
              <li><Link to='/dashboard'>Cars</Link></li>
            </ul>
          </div>
          <div className='box-position' style={sectionStyle}></div>
        </section>
        <Container>
          <Form onSubmit={this.handleSubmit}>
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Car Price</Form.Label>
              {/* <Form.Control type="file"  /> */}
              <input type="file" name="img" multiple onChange={(event) => {
                this.displayPicture(event)
              }}></input>
            </Form.Group>
            <Button type='submit' variant="primary">Submit</Button>
          </Form>

          {this.state.pictureUrl ? <div className='previewImage'><img src={this.state.pictureUrl} alt='img' /></div> : null}

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