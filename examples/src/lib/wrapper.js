import ModalContext from "./context";
import React from "react";

export default class extends React.Component {
  render() {
    const { app, children } = this.props;
    ModalContext.props = { app };
    return (
      <ModalContext.Provider value={{ app }}>{children}</ModalContext.Provider>
    );
  }
}
