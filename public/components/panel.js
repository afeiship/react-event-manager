import React, { useEffect } from 'react';
import { event } from '@/main';

@event
export default class extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { $app } = this.props;
      $app.emit('panel:ok', {
        data: [1, 2, 3]
      });
    }, 2000);
  }

  render() {
    return (
      <div className="panel">
        <h1>Panel title</h1>
        <p>I am a panel</p>
        <button
          className="button my-3 is-info is-fullwidth"
          onClick={(e) => {
            this.props.$app.emit('panel:cancel');
          }}>
          Panel will cancel action
        </button>
      </div>
    );
  }
}
