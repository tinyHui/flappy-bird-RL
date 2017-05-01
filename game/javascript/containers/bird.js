import React from 'react'
import { connect } from 'react-redux'
import Bird from '../components/bird.jsx'

const mapStateToProps = (state) => {
  return {
    bird: state.bird
  }
}

export default connect(
  mapStateToProps
)(Bird);
