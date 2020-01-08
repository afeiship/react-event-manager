import React, { Component } from 'react';
import EventContext from './context';

const MSG_NO_EVENT_MITT = 'Plealse install @feizheng/event-mitt for your app.';

export default (WrapComponent) => {
  class ContextProps extends Component {
    constructor(inProps) {
      super(inProps);
      this._resources = [];
      this.attach();
    }

    attach() {
      const { app } = EventContext.props;
      if (typeof app.on !== 'function') {
        throw new Error(MSG_NO_EVENT_MITT);
      }

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
      const { forwardedRef, ...otherProps } = this.props;
      return (
        <EventContext.Consumer>
          {(globalContext) => {
            const { inject, ...globalProps } = globalContext;
            return (
              <WrapComponent
                ref={(root) => (this.root = root)}
                {...globalProps}
                {...otherProps}
              />
            );
          }}
        </EventContext.Consumer>
      );
    }
  }

  const forwardRef = (props, ref) => {
    return <ContextProps {...props} forwardedRef={ref} />;
  };

  forwardRef.displayName = Component.displayName || Component.name;
  return React.forwardRef(forwardRef);
};
