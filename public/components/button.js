import React from 'react';
import connect from '@/components/lib/connect';

@connect
export default class extends React.Component {
  static events = {
    'panel:ok': 'onOk',
    'panel:cancel': 'onCancel'
  };

  constructor(inProps) {
    super(inProps);
    console.log('ctor');
    this.state = { items: [] };
  }

  onOk(e) {
    console.log('onOk!', e);
    this.setState({ items: e });
  }

  onCancel() {
    console.log('onCancel!');
  }

  render() {
    console.log(this.props);
    return (
      <button
        className="button"
        onClick={(e) => {
          console.log(e);
        }}>
        {this.props.children}
        {JSON.stringify(this.state.items)}
      </button>
    );
  }
}
