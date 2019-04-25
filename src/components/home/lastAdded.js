import React, { Component } from 'react'
import LastAddedItem from './lastAddedItem'

class LastAdded extends Component {

  render() {

    return (
      <section className='last-added'>
        <LastAddedItem />
        <LastAddedItem />
        <LastAddedItem />
        <LastAddedItem />
      </section>
    )
  }
}


export default LastAdded