import React, { Component } from 'react'

import Audi from '../../../assets/audi.jpg'
class LastAddedItem extends Component {

  render() {

    return (
      <section className='last-added-item'>
        <img src={Audi} alt='Car' />
        <h3>Audi</h3>
        <p>From $125 per day</p>
      </section>
    )
  }
}


export default LastAddedItem