import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {


  render() {
    return (
      <div>
        dsads
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}
export default connect(mapStateToProps)(NavBar)