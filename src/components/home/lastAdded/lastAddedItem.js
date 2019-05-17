import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LastAddedItem extends Component {

  render() {
    const { project } = this.props
    return (
      <section className='last-added-item'>
        <Link to={'/project/' + project.id} >
          <img src={project.userImage} alt='Car' />
        </Link>
        <h3>{project.carType} {project.carModel} <span>{project.carYear}</span></h3>
        <div className='vihicle-price'>
          <div className='currency'>{project.Currency}</div>
          <div className='price'>{project.carPrice}</div>
          <span>per day</span>
        </div>
      </section>
    )
  }
}


export default LastAddedItem