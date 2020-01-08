import React, { Component } from 'react';
import EventContext from './context';

export default (WrapComponent) => {
  class ContextProps extends Component {
    constructor(inProps) {
      super(inProps);
      this._resources = [];
      this.attach();
    }

    attach() {
      const { app } = EventContext.props;
      const { events } = WrapComponent;
      const keys = Object.keys(events || []);
      this._resources = keys.map((key) => {
        return app.on(key, (e) => {
          this.root[events[key]](e);
        });
      });
    }

    detach() {
      this._resources.forEach((res) => {
        res.destroy();
      });
    }

    componentWillUnmount() {
      this.detach();
      this._resources = [];
    }

    render() {
      // todo: forwardedRef not used:
      return (
        <EventContext.Consumer>
          {(globalContext) => {
            return (
              <WrapComponent
                ref={(root) => (this.root = root)}
                {...globalContext}
              />
            );
          }}
        </EventContext.Consumer>
      );
    }
  }

  ContextProps.displayName = 'react-modal-mannaer-connect';
  return ContextProps;
};
