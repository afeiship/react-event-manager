import React from "react";
import connect from "./lib/connect";

class Button extends React.Component {
  static events = {
    "panel:ok": "onOk",
    "panel:cancel": "onCancel"
  };

  constructor(inProps) {
    super(inProps);
    console.log("ctor");
  }

  onOk(e) {
    console.log("onOk!", e);
  }

  onCancel() {
    console.log("onCancel!");
  }

  render() {
    return (
      <button
        onClick={e => {
          console.log(e);
        }}
      >
        Open Modal
      </button>
    );
  }
}

export default connect(Button);
