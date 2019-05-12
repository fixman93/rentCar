import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LastAddedItem from './lastAddedItem'

import './index.scss'
class LastAdded extends Component {

  render() {
    const { projects } = this.props
    return (
      <section className='last-added'>
        <Container>
          <h2 className='title-block text-center text-gray font-bold'>Najnovije za Vas:</h2>
          <Row>
            {projects && projects.map(project => {
              return (
                <Col sm={4}><LastAddedItem /></Col>
              )
            })}

            {/* <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col>
            <Col sm={4}><LastAddedItem /></Col> */}
          </Row>
        </Container>
      </section>
    )
  }
}


export default LastAdded