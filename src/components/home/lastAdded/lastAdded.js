import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LastAddedItem from './lastAddedItem'

class LastAdded extends Component {

  render() {

    return (
      <section className='last-added'>
        <Container>
          <Row>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
          </Row>
        </Container>
      </section>
    )
  }
}


export default LastAdded