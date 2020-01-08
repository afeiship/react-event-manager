import React, { Component } from "react";
import ModalContext from "./context";

export default WrapComponent => {
  class ContextProps extends Component {
    constructor(inProps) {
      super(inProps);
      this._resources = [];
      this.attach();
    }

    attach() {
      const ctx = WrapComponent.prototype;
      const { app } = ModalContext.props;
      const { events } = WrapComponent;
      const keys = Object.keys(events || []);

      keys.forEach(key => {
        this._resources.push(
          app.on(key, e => {
            ctx[events[key]](e);
          })
        );
      });
    }

    detach() {
      this._resources.forEach(res => {
        res.destroy();
      });
    }

    componentWillUnmount() {
      this.detach();
    }

    render() {
      const { forwardedRef, ...otherProps } = this.props;
      return (
        <ModalContext.Consumer>
          {globalContext => {
            return (
              <WrapComponent
                ref={forwardedRef}
                {...globalContext}
                {...otherProps}
              />
            );
          }}
        </ModalContext.Consumer>
      );
    }
  }
  const forwardRef = (props, ref) => {
    return <ContextProps {...props} forwardedRef={ref} />;
  };

  forwardRef.displayName = Component.displayName || Component.name;
  return React.forwardRef(forwardRef);
};
