import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { createProject } from '../../store/actions/projectAction'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

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
      listElements: [],
      carCountry: 'Afghanistan',
      carCity: '',
    }
    this.displayPicture = this.displayPicture.bind(this)
    this.addElement = this.addElement.bind(this)
  }

  selectCountry(val) {
    this.setState({ carCountry: val });
  }

  selectRegion(val) {
    this.setState({ carCity: val });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formValidation = () => {

  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.carPrice.length === '' || this.state.picture === null || this.state.carModel === '' || this.state.carElements > 0 || this.state.carDescription === '') {
      this.setState({
        errorField: true
      })
    }
    else {
      this.setState({
        errorField: false
      })
      this.props.createProject(this.state)
      this.props.history.push('/dashboard')
    }
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
  render() {
    const sectionStyle = {
      backgroundImage: `url(${bg_cars})`
    };
    console.log('aaaaaaaaaaaaaa', this.state.picture)
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    console.log('ELEMENTS', this.state.listElements)
    return (
      <div>
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
        <Container className='add-new-car'>
          <Form onSubmit={this.handleSubmit}>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Currency</Form.Label>
                  <Form.Control as="select" onChange={this.handleChange} name='currency' value={this.state.currency}>
                    <option>EUR</option>
                    <option>BAM</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Car Price</Form.Label>
                  <Form.Control type="number" name='carPrice' value={this.state.carPrice} onChange={this.handleChange} placeholder='Car Price' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <Form.Control as="select" name='carYear' value={this.state.carYear} onChange={this.handleChange}>
                    <option >Choose</option>
                    <option >2019</option>
                    <option >2018</option>
                    <option >2017</option>
                    <option >2016</option>
                    <option >2015</option>
                    <option >
                      2014
		</option>
                    <option >
                      2013
		</option>
                    <option >
                      2012
		</option>
                    <option >
                      2011
		</option>
                    <option >
                      2010
		</option>
                    <option >
                      2009
		</option>
                    <option >
                      2008
		</option>
                    <option >
                      2007
		</option>
                    <option >
                      2006
		</option>
                    <option >
                      2005
		</option>
                    <option >
                      2004
		</option>
                    <option >
                      2003
		</option>
                    <option >
                      2002
		</option>
                    <option >
                      2001
		</option>
                    <option >
                      2000
		</option>
                    <option >
                      1999
		</option>
                    <option >
                      1998
		</option>
                    <option >
                      1997
		</option>
                    <option >
                      1996
		</option>
                    <option >
                      1995
		</option>
                    <option >
                      1994
		</option>
                    <option >
                      1993
		</option>
                    <option >
                      1992
		</option>
                    <option >
                      1991
		</option>
                    <option >
                      1990
		</option>
                    <option >
                      1985
		</option>
                    <option >
                      1980
		</option>
                    <option >
                      1975
		</option>
                    <option >
                      1970
		</option>
                    <option >
                      1965
		</option>
                    <option >
                      1960
		</option>
                    <option >
                      1900
		</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="select" onChange={this.handleChange} name='carType' value={this.state.carType}>
                    <option >Choose</option>
                    <option >Alfa Romeo</option>
                    <option >Audi </option>
                    <option >BMW </option>
                    <option >Citroen </option>
                    <option >Fiat </option>
                    <option >Ford </option>
                    <option >Hyundai </option>
                    <option >Jeep </option>
                    <option >Mazda </option>
                    <option >Mercedes-Benz </option>
                    <option >Mitsubishi </option>
                    <option >Nissan </option>
                    <option >Opel </option>
                    <option >Peugeot </option>
                    <option >Renault </option>
                    <option >Seat </option>
                    <option >Škoda </option>
                    <option >Toyota </option>
                    <option >Volkswagen </option>
                    <option >Volvo </option>
                    <option >Zastava </option>
                    <option >Acura  </option>
                    <option >Aixam  </option>
                    <option >Alpina  </option>
                    <option >Asia Motors  </option>
                    <option >Aston Martin  </option>
                    <option >Austin  </option>
                    <option >Austin Healey  </option>
                    <option >Bentley  </option>
                    <option >Borgward  </option>
                    <option >Brilliance  </option>
                    <option >Bugatti  </option>
                    <option >Buick  </option>
                    <option >Cadillac  </option>
                    <option >Caterham  </option>
                    <option >Chevrolet  </option>
                    <option >Chrysler  </option>
                    <option >Cobra  </option>
                    <option >Corvette  </option>
                    <option >Dacia  </option>
                    <option >Daewoo  </option>
                    <option >Daihatsu  </option>
                    <option >DeTomaso  </option>
                    <option >Dodge  </option>
                    <option >Ferrari  </option>
                    <option >GMC  </option>
                    <option >Holden  </option>
                    <option >Honda  </option>
                    <option >Hummer  </option>
                    <option >Infiniti  </option>
                    <option >Isuzu  </option>
                    <option >Iveco  </option>
                    <option >Jaguar  </option>
                    <option >Kia  (521)</option>
                    <option >Königsegg  </option>
                    <option >Lada  (290)</option>
                    <option >Lamborghini  </option>
                    <option >Lancia  </option>
                    <option >Land Rover  </option>
                    <option >Landwind  </option>
                    <option >Lexus  </option>
                    <option >Ligier  </option>
                    <option >Lincoln  </option>
                    <option >Lotus  </option>
                    <option >Mahindra  </option>
                    <option >Maserati  </option>
                    <option >Maybach  </option>
                    <option >MG  </option>
                    <option >MINI  </option>
                    <option >Morgan  </option>
                    <option >NSU  (10)</option>
                    <option >Oldsmobile  </option>
                    <option >Piaggio  </option>
                    <option >Plymouth  </option>
                    <option >Pontiac  </option>
                    <option >Porsche  </option>
                    <option >Proton  </option>
                    <option >Rolls Royce  </option>
                    <option >Rover  </option>
                    <option >Saab  </option>
                    <option >Santana  </option>
                    <option >Smart  </option>
                    <option >Spyker  </option>
                    <option >Ssangyong  </option>
                    <option >Subaru  </option>
                    <option >Suzuki  </option>
                    <option >Talbot  </option>
                    <option >Tata  </option>
                    <option >Trabant  </option>
                    <option >Triumph  </option>
                    <option >TVR  </option>
                    <option >Wartburg  </option>
                    <option >Wiesmann  </option>
                    <option >Drugi  </option>
                    <option >Great Wall  </option>
                    <option >Tesla  </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Model</Form.Label>
                  <Form.Control type="text" name='carModel' value={this.state.carModel} onChange={this.handleChange} placeholder='Model' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={this.state.carCountry}
                    onChange={(val) => this.selectCountry(val)}
                    className='form-control' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <RegionDropdown
                    country={this.state.carCountry}
                    value={this.state.carCity}
                    onChange={(val) => this.selectRegion(val)}
                    className='form-control' />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className='car-specifications'>
              <Form.Label>Spicifications</Form.Label>
              <InputGroup className="mb-3">
                <FormControl type="text" name='carElement' value={this.state.carElement} onChange={this.handleChange} placeholder='GPS, NAVI, MMI etc...' />
                <InputGroup.Append>
                  <Button variant="outline-secondary" className='add-elements' onClick={this.addElement}>+</Button>
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
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" name='carDescription' value={this.state.carDescription} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group >
              <Form.Label htmlFor='uploadMainImage'><FontAwesomeIcon icon="camera" /></Form.Label>
              {/* <Form.Control type="file"  /> */}
              <input type="file" name="img" id='uploadMainImage' className='hidden' onChange={(event) => {
                this.displayPicture(event)
              }}></input>
            </Form.Group>

            {this.state.errorField ? <div className='errorField'>Please check your fields</div> : null}
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