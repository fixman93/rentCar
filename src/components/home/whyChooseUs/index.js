import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class WhyChooseUs extends Component {

  render() {

    return (
      <section className='why-choose-us'>
        <Container>
          <h2 className='title-block text-center'>Why Choose Us?</h2>
          <Row>
            <Col sm={4}>
              <div className='box'>
                <h4>Premium Service</h4>
                <p>Rent Car provides high-quality service to everyone who is looking for reliable car rentals.</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className='box'>
                <h4>Variety of Locations</h4>
                <p>We have a variety of car rental offices located throughout the USA in almost all 50 states.</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className='box'>
                <h4>Qualified Team</h4>
                <p>You can fully rely on our team of professionals who are always ready to help you.</p>
              </div>
            </Col>
          </Row>
        </Container >
      </section >
    )
  }
}


export default WhyChooseUs