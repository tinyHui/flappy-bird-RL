import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Text, Image} from 'react-konva';
import { toImageDom } from '../utils'

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: toImageDom('static/bird.png')
    }
  }

  render() {
    const { score, isVisible, scoreUp } = this.props;
    let classes = classnames({
      'hide': !isVisible,
      'score': true
    });

    return <Text text={(score || 0).toString()} fontSize={35} fontFamily={'Calibri'} fill={'#fff'} padding={20} />
  }
}

export default Score;
