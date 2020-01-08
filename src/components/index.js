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
    app: PropTypes.any,
    inject: PropTypes.func
  };

  static defaultProps = {
    inject: noop
  };

  render() {
    const { app, inject, children } = this.props;
    EventContext.props = { app };
    inject(app);

    return (
      <EventContext.Provider value={{ $app: app, inject }}>
        {children}
      </EventContext.Provider>
    );
  }
}
