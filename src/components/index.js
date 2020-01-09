import React, { Component } from 'react';
import noop from '@feizheng/noop';
import EventContext from './lib/context';
import PropTypes from 'prop-types';

const CLASS_NAME = 'react-event-manager';

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
    inject: PropTypes.func
  };

  static defaultProps = {
    inject: noop
  };

  render() {
    const { value, inject, children } = this.props;
    EventContext.props = { app: value };
    inject(value);

    return (
      <EventContext.Provider value={{ $app: value, inject }}>
        {children}
      </EventContext.Provider>
    );
  }
}
