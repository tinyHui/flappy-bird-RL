import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

class Bird extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    this.state.bird.timestamp = Date.now();
  }

  render() {
    const { bird, _ } = this.state;

    let style = {
      transform: `translate(0, ${-bird.currentHeight}px) rotate(${bird.currentRotate || 0}deg)`
    };
    let classes = classnames({
      'bird': true,
      'flying': bird.isFlying
    });

    return <div className={classes} style={style}></div>
  }
}

Bird.propTypes = {
  bird: PropTypes.shape({
    currentHeight: PropTypes.number.isRequired,
    currentRotate: PropTypes.number.isRequired,
    isFlying: PropTypes.bool.isRequired
  })
}

export default Bird;
