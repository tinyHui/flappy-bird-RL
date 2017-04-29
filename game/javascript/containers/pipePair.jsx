import React from 'react'
import { connect } from 'react-redux'
import PipePair from '../components/pipePair.jsx'

const mapStateToProps = (state) => {
  return {
    pipePair: state.pipePair
  }
}

export default connect(
  mapStateToProps,
  null
)(PipePair)
