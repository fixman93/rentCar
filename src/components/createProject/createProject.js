import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'

import { createProject } from '../../store/actions/projectAction'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import NavBar from '../navbar/index'
import bg_cars from '../../assets/bg-cars.jpg'

import './createProject.scss'

class createProjects extends Component {


  componentDidMount() {

  }
  constructor(props) {
    super(props)
    this.state = {
      currency: 'EUR',
      carPrice: '',
      carYear: '',
      carType: '',
      carModel: '',
      picture: null,
      pictureUrl: null,
      carDescription: '',
      carElement: '',
      listElements: []
      // date: [new Date(), new Date()],
    }
    this.displayPicture = this.displayPicture.bind(this)
    this.addElement = this.addElement.bind(this)
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

  changeData = (e) => {
    e.preventDefault()
    this.props.updateProject()
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
  addElement() {
    console.log('NEW', this.state.carElement)
    let newElements = this.state.carElement
    let arrayElements = this.state.listElements
    arrayElements.push(newElements)
    this.setState({
      carElement: '',
      listElements: arrayElements
    })

  }
  // onChange = date => this.setState({ date })
  render() {
    const sectionStyle = {
      backgroundImage: `url(${bg_cars})`
    };
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    console.log('ELEMENTS', this.state.listElements)
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
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Currency</Form.Label>
                  <Form.Control as="select" onChange={this.handleChange} name='currency' value={this.state.currency}>
                    <option>EUR</option>
                    <option>BAM</option>
                  </Form.Control>
                </Form.Group>
                {/* <DateTimeRangePicker
              onChange={this.onChange}
              value={this.state.date}
            /> */}
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Car Price</Form.Label>
                  <Form.Control type="number" name='carPrice' value={this.state.carPrice} onChange={this.handleChange} placeholder='Car Price' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="carYear">
                  <Form.Label>Year</Form.Label>
                  <Form.Control type="text" name='carYear' value={this.state.carYear} onChange={this.handleChange} placeholder='1999' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="carType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control type="text" name='carType' value={this.state.carType} onChange={this.handleChange} placeholder='1999' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="carModel">
                  <Form.Label>Model</Form.Label>
                  <Form.Control type="text" name='carModel' value={this.state.carModel} onChange={this.handleChange} placeholder='1999' />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" name='carDescription' value={this.state.carDescription} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Car Price</Form.Label>
              {/* <Form.Control type="file"  /> */}
              <input type="file" name="img" multiple onChange={(event) => {
                this.displayPicture(event)
              }}></input>
            </Form.Group>

            <Form.Group >
              <Form.Label>Spicification</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  type="text" name='carElement' value={this.state.carElement} onChange={this.handleChange} placeholder='Extra field'
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" className='add-elements' onClick={this.addElement}>Button</Button>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="text-muted list-elements">
                {this.state.listElements && this.state.listElements.map((element, i) => {
                  return (
                    <span key={i}>{element}</span>
                  )
                })}
              </Form.Text>
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