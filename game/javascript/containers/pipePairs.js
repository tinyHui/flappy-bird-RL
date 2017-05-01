import React from 'react'
import { connect } from 'react-redux'
import PipePairs from '../components/pipePairs.jsx'
import { flyUp } from '../actions'

const mapStateToProps = (state) => {
  return {
    pipePairs: state.pipePairs
  }
}

export default connect(
  mapStateToProps
)(PipePairs);
