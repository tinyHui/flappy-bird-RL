import React from 'react'
import { connect } from 'react-redux'
import Bird from '../components/bird.jsx'
import { dropDown } from '../actions'

const mapStateToProps = (state) => {
  return {
    bird: state.bird
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerDrop: () => {
      dispatch(dropDown())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bird);
