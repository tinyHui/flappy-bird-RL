import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Group} from 'react-konva';

import PipePair from './pipePair.jsx'

class PipePairs extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { pipePairs } = this.props;

    return <Group>
      {
        pipePairs.map((pair) => <PipePair key={pair.timestamp} {...pair}/>)
      }
    </Group>
  }
}

PipePairs.propTypes = {
  pipePairs: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    moveOffset: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }))
}

export default PipePairs;
