import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Audi from '../../../assets/audi.jpg'
class LastAddedItem extends Component {

  render() {

    return (
      <section className='last-added-item'>
        <Link to='/'>
          <img src={Audi} alt='Car' />
        </Link>
        <h3>Audi</h3>
        <p>From $125 per day</p>
      </section>
    )
  }
}


export default LastAddedItem