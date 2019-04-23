import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/index'


import './index.scss'
class Home extends Component {

  render() {

    return (
      <div className='home-page'>
        <NavBar />
      </div>
    )
  }
}


export default Home