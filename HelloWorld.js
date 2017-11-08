import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

export default class HelloWorld extends PureComponent {
  static propTypes = {
    foo: propTypes.any
  };

  @autobind
  aBoundFunction() {

  }

  render() {
    return false;
  }
}