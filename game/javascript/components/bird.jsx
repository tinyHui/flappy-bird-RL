import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Layer, Image} from 'react-konva';
import { toImageDom } from '../utils'

class Bird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: toImageDom('static/bird.png')
    }
  }

  render() {
    const { bird, isVisible, gameEnded } = this.props;

    let style = {
      transform: `translate(0, ${-bird.currentHeight}px) rotate(${bird.currentRotate || 0}deg)`,
      left: `${bird.x}px`
    };
    let classes = classnames({
      'hide': !isVisible,
      'bird': true,
      'flying': bird.isFlying && !gameEnded
    });

    // return <div className={classes} style={style}></div>

    return <Image image={this.state.image} x={45} y={400 - bird.currentHeight - 24}/>
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
