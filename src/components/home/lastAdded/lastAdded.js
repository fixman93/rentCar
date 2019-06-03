import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LastAddedItem from './lastAddedItem'

import './index.scss'
export class LastAdded extends Component {

  renderItems = () => {
    const { projects } = this.props
    return projects && projects.map((project, i) => {
      return (
        <Col sm={4} key={i}><LastAddedItem className='LastAddedItem' project={project} /></Col>
      )
    })

  }
  render() {

    return (
      <section className='last-added'  >
        <Container>
          <h2 className='title-block text-gray'>You might like:</h2>
          <Row>
            {this.renderItems()}
          </Row>
        </Container>
      </section>
    )
  }
}


export default LastAdded