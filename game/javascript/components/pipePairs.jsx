import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import PipePair from './pipePair.jsx'

class PipePairs extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { pipePairs } = this.props;

    return <div>
      {
        pipePairs.map((pair) => <PipePair key={pair.timestamp} {...pair}/>)
      }
    </div>
  }
}

PipePairs.propTypes = {
  pipePairs: PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    moveOffset: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  })
}

export default PipePairs;
