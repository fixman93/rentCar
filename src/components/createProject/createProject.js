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
      carCity: ''
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
                <Form.Group controlId="exampleForm.ControlSelect1">
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
                <Form.Group controlId="carType">
                  <Form.Label>Car Type</Form.Label>
                  <Form.Control as="select" onChange={this.handleChange} name='carType' value={this.state.carType}>
                    <option >Choose</option>
                    <option >Alfa Romeo</option>
                    <option >Audi (9321)</option>
                    <option >BMW (5868)</option>
                    <option >Citroen (3109)</option>
                    <option >Fiat (3823)</option>
                    <option >Ford (4783)</option>
                    <option >Hyundai (824)</option>
                    <option >Jeep (362)</option>
                    <option >Mazda (520)</option>
                    <option >Mercedes-Benz (10892)</option>
                    <option >Mitsubishi (436)</option>
                    <option >Nissan (888)</option>
                    <option >Opel (7811)</option>
                    <option >Peugeot (6176)</option>
                    <option >Renault (6095)</option>
                    <option >Seat (1858)</option>
                    <option >Škoda (3907)</option>
                    <option >Toyota (968)</option>
                    <option >Volkswagen (27131)</option>
                    <option >Volvo (972)</option>
                    <option >Zastava (297)</option>
                    <option >Acura  (65)</option>
                    <option >Aixam  (32)</option>
                    <option >Alpina  (18)</option>
                    <option >Asia Motors  (8)</option>
                    <option >Aston Martin  (7)</option>
                    <option >Austin  (13)</option>
                    <option >Austin Healey  (3)</option>
                    <option >Bentley  (2)</option>
                    <option >Borgward  (1)</option>
                    <option >Brilliance  (2)</option>
                    <option >Bugatti  (3)</option>
                    <option >Buick  (3)</option>
                    <option >Cadillac  (11)</option>
                    <option >Caterham  (1)</option>
                    <option >Chevrolet  (334)</option>
                    <option >Chrysler  (178)</option>
                    <option >Cobra  (2)</option>
                    <option >Corvette  (2)</option>
                    <option >Dacia  (193)</option>
                    <option >Daewoo  (210)</option>
                    <option >Daihatsu  (49)</option>
                    <option >DeTomaso  (0)</option>
                    <option >Dodge  (78)</option>
                    <option >Ferrari  (8)</option>
                    <option >GMC  (23)</option>
                    <option >Holden  (3)</option>
                    <option >Honda  (195)</option>
                    <option >Hummer  (22)</option>
                    <option >Infiniti  (19)</option>
                    <option >Isuzu  (78)</option>
                    <option >Iveco  (48)</option>
                    <option >Jaguar  (125)</option>
                    <option >Kia  (521)</option>
                    <option >Königsegg  (2)</option>
                    <option >Lada  (290)</option>
                    <option >Lamborghini  (7)</option>
                    <option >Lancia  (222)</option>
                    <option >Land Rover  (424)</option>
                    <option >Landwind  (1)</option>
                    <option >Lexus  (21)</option>
                    <option >Ligier  (1)</option>
                    <option >Lincoln  (24)</option>
                    <option >Lotus  (0)</option>
                    <option >Mahindra  (4)</option>
                    <option >Maserati  (14)</option>
                    <option >Maybach  (3)</option>
                    <option >MG  (10)</option>
                    <option >MINI  (198)</option>
                    <option >Morgan  (1)</option>
                    <option >NSU  (10)</option>
                    <option >Oldsmobile  (6)</option>
                    <option >Piaggio  (9)</option>
                    <option >Plymouth  (4)</option>
                    <option >Pontiac  (21)</option>
                    <option >Porsche  (178)</option>
                    <option >Proton  (4)</option>
                    <option >Rolls Royce  (0)</option>
                    <option >Rover  (130)</option>
                    <option >Saab  (72)</option>
                    <option >Santana  (4)</option>
                    <option >Smart  (208)</option>
                    <option >Spyker  (1)</option>
                    <option >Ssangyong  (152)</option>
                    <option >Subaru  (89)</option>
                    <option >Suzuki  (451)</option>
                    <option >Talbot  (1)</option>
                    <option >Tata  (20)</option>
                    <option >Trabant  (2)</option>
                    <option >Triumph  (10)</option>
                    <option >TVR  (23)</option>
                    <option >Wartburg  (10)</option>
                    <option >Wiesmann  (6)</option>
                    <option >Drugi  (70)</option>
                    <option >Great Wall  (16)</option>
                    <option >Tesla  (1)</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="carModel">
                  <Form.Label>Model</Form.Label>
                  <Form.Control type="text" name='carModel' value={this.state.carModel} onChange={this.handleChange} placeholder='Model' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select" onChange={this.handleChange} name='carCountry' value={this.state.carCountry}>
                    <option value="AF">Afghanistan</option>
                    <option >Åland Islands</option>
                    <option >Albania</option>
                    <option >Algeria</option>
                    <option >American Samoa</option>
                    <option >Andorra</option>
                    <option >Angola</option>
                    <option >Anguilla</option>
                    <option >Antarctica</option>
                    <option >Antigua and Barbuda</option>
                    <option >Argentina</option>
                    <option >Armenia</option>
                    <option >Aruba</option>
                    <option >Australia</option>
                    <option >Austria</option>
                    <option >Azerbaijan</option>
                    <option >Bahamas</option>
                    <option >Bahrain</option>
                    <option >Bangladesh</option>
                    <option >Barbados</option>
                    <option >Belarus</option>
                    <option >Belgium</option>
                    <option >Belize</option>
                    <option >Benin</option>
                    <option >Bermuda</option>
                    <option >Bhutan</option>
                    <option >Bolivia, Plurinational State of</option>
                    <option >Bonaire, Sint Eustatius and Saba</option>
                    <option >Bosnia and Herzegovina</option>
                    <option >Botswana</option>
                    <option >Bouvet Island</option>
                    <option >Brazil</option>
                    <option >British Indian Ocean Territory</option>
                    <option >Brunei Darussalam</option>
                    <option >Bulgaria</option>
                    <option >Burkina Faso</option>
                    <option >Burundi</option>
                    <option >Cambodia</option>
                    <option >Cameroon</option>
                    <option >Canada</option>
                    <option >Cape Verde</option>
                    <option >Cayman Islands</option>
                    <option >Central African Republic</option>
                    <option >Chad</option>
                    <option >Chile</option>
                    <option >China</option>
                    <option >Christmas Island</option>
                    <option >Cocos (Keeling) Islands</option>
                    <option >Colombia</option>
                    <option >Comoros</option>
                    <option >Congo</option>
                    <option >Congo, the Democratic Republic of the</option>
                    <option >Cook Islands</option>
                    <option >Costa Rica</option>
                    <option >Côte d'Ivoire</option>
                    <option >Croatia</option>
                    <option >Cuba</option>
                    <option >Curaçao</option>
                    <option >Cyprus</option>
                    <option >Czech Republic</option>
                    <option >Denmark</option>
                    <option >Djibouti</option>
                    <option >Dominica</option>
                    <option >Dominican Republic</option>
                    <option >Ecuador</option>
                    <option >Egypt</option>
                    <option >El Salvador</option>
                    <option >Equatorial Guinea</option>
                    <option >Eritrea</option>
                    <option >Estonia</option>
                    <option >Ethiopia</option>
                    <option >Falkland Islands (Malvinas)</option>
                    <option >Faroe Islands</option>
                    <option >Fiji</option>
                    <option >Finland</option>
                    <option >France</option>
                    <option >French Guiana</option>
                    <option >French Polynesia</option>
                    <option >French Southern Territories</option>
                    <option >Gabon</option>
                    <option >Gambia</option>
                    <option >Georgia</option>
                    <option >Germany</option>
                    <option >Ghana</option>
                    <option >Gibraltar</option>
                    <option >Greece</option>
                    <option >Greenland</option>
                    <option >Grenada</option>
                    <option >Guadeloupe</option>
                    <option >Guam</option>
                    <option >Guatemala</option>
                    <option >Guernsey</option>
                    <option >Guinea</option>
                    <option >Guinea-Bissau</option>
                    <option >Guyana</option>
                    <option >Haiti</option>
                    <option >Heard Island and McDonald Islands</option>
                    <option >Holy See (Vatican City State)</option>
                    <option >Honduras</option>
                    <option >Hong Kong</option>
                    <option >Hungary</option>
                    <option >Iceland</option>
                    <option >India</option>
                    <option >Indonesia</option>
                    <option >Iran, Islamic Republic of</option>
                    <option >Iraq</option>
                    <option >Ireland</option>
                    <option >Isle of Man</option>
                    <option >Israel</option>
                    <option >Italy</option>
                    <option >Jamaica</option>
                    <option >Japan</option>
                    <option >Jersey</option>
                    <option >Jordan</option>
                    <option >Kazakhstan</option>
                    <option >Kenya</option>
                    <option >Kiribati</option>
                    <option >Korea, Democratic People's Republic of</option>
                    <option >Korea, Republic of</option>
                    <option >Kuwait</option>
                    <option >Kyrgyzstan</option>
                    <option >Lao People's Democratic Republic</option>
                    <option >Latvia</option>
                    <option >Lebanon</option>
                    <option >Lesotho</option>
                    <option >Liberia</option>
                    <option >Libya</option>
                    <option >Liechtenstein</option>
                    <option >Lithuania</option>
                    <option >Luxembourg</option>
                    <option >Macao</option>
                    <option >Macedonia, the former Yugoslav Republic of</option>
                    <option >Madagascar</option>
                    <option >Malawi</option>
                    <option >Malaysia</option>
                    <option >Maldives</option>
                    <option >Mali</option>
                    <option >Malta</option>
                    <option >Marshall Islands</option>
                    <option >Martinique</option>
                    <option >Mauritania</option>
                    <option >Mauritius</option>
                    <option >Mayotte</option>
                    <option >Mexico</option>
                    <option >Micronesia, Federated States of</option>
                    <option >Moldova, Republic of</option>
                    <option >Monaco</option>
                    <option >Mongolia</option>
                    <option >Montenegro</option>
                    <option >Montserrat</option>
                    <option >Morocco</option>
                    <option >Mozambique</option>
                    <option >Myanmar</option>
                    <option >Namibia</option>
                    <option >Nauru</option>
                    <option >Nepal</option>
                    <option >Netherlands</option>
                    <option >New Caledonia</option>
                    <option >New Zealand</option>
                    <option >Nicaragua</option>
                    <option >Niger</option>
                    <option >Nigeria</option>
                    <option >Niue</option>
                    <option >Norfolk Island</option>
                    <option >Northern Mariana Islands</option>
                    <option >Norway</option>
                    <option >Oman</option>
                    <option >Pakistan</option>
                    <option >Palau</option>
                    <option >Palestinian Territory, Occupied</option>
                    <option >Panama</option>
                    <option >Papua New Guinea</option>
                    <option >Paraguay</option>
                    <option >Peru</option>
                    <option >Philippines</option>
                    <option >Pitcairn</option>
                    <option >Poland</option>
                    <option >Portugal</option>
                    <option >Puerto Rico</option>
                    <option >Qatar</option>
                    <option >Réunion</option>
                    <option >Romania</option>
                    <option >Russian Federation</option>
                    <option >Rwanda</option>
                    <option >Saint Barthélemy</option>
                    <option >Saint Helena, Ascension and Tristan da Cunha</option>
                    <option >Saint Kitts and Nevis</option>
                    <option >Saint Lucia</option>
                    <option >Saint Martin (French part)</option>
                    <option >Saint Pierre and Miquelon</option>
                    <option >Saint Vincent and the Grenadines</option>
                    <option >Samoa</option>
                    <option >San Marino</option>
                    <option >Sao Tome and Principe</option>
                    <option >Saudi Arabia</option>
                    <option >Senegal</option>
                    <option >Serbia</option>
                    <option >Seychelles</option>
                    <option >Sierra Leone</option>
                    <option >Singapore</option>
                    <option >Sint Maarten (Dutch part)</option>
                    <option >Slovakia</option>
                    <option >Slovenia</option>
                    <option >Solomon Islands</option>
                    <option >Somalia</option>
                    <option >South Africa</option>
                    <option >South Georgia and the South Sandwich Islands</option>
                    <option >South Sudan</option>
                    <option >Spain</option>
                    <option >Sri Lanka</option>
                    <option >Sudan</option>
                    <option >Suriname</option>
                    <option >Svalbard and Jan Mayen</option>
                    <option >Swaziland</option>
                    <option >Sweden</option>
                    <option >Switzerland</option>
                    <option >Syrian Arab Republic</option>
                    <option >Taiwan, Province of China</option>
                    <option >Tajikistan</option>
                    <option >Tanzania, United Republic of</option>
                    <option >Thailand</option>
                    <option >Timor-Leste</option>
                    <option >Togo</option>
                    <option >Tokelau</option>
                    <option >Tonga</option>
                    <option >Trinidad and Tobago</option>
                    <option >Tunisia</option>
                    <option >Turkey</option>
                    <option >Turkmenistan</option>
                    <option >Turks and Caicos Islands</option>
                    <option >Tuvalu</option>
                    <option >Uganda</option>
                    <option >Ukraine</option>
                    <option >United Arab Emirates</option>
                    <option >United Kingdom</option>
                    <option >United States</option>
                    <option >United States Minor Outlying Islands</option>
                    <option >Uruguay</option>
                    <option >Uzbekistan</option>
                    <option >Vanuatu</option>
                    <option >Venezuela, Bolivarian Republic of</option>
                    <option >Viet Nam</option>
                    <option >Virgin Islands, British</option>
                    <option >Virgin Islands, U.S.</option>
                    <option >Wallis and Futuna</option>
                    <option >Western Sahara</option>
                    <option >Yemen</option>
                    <option >Zambia</option>
                    <option >Zimbabwe</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="carModel">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" name='carCity' value={this.state.carCity} onChange={this.handleChange} placeholder='City' />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className='car-specifications'>
              <Form.Label>Spicifications</Form.Label>
              <InputGroup className="mb-3">
                <FormControl type="text" name='carElement' value={this.state.carElement} onChange={this.handleChange} placeholder='Extra field' />
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