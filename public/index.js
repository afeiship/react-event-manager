import ReactEventManager from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import Button from './components/button';
import Panel from './components/panel';
import EventMitt from '@feizheng/event-mitt';
import './assets/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    Object.assign(this, EventMitt);
  }

  render() {
    return (
      <ReactEventManager value={this}>
        <div className="app-container">
          <Panel />
          <Button>I AM a button</Button>
        </div>
      </ReactEventManager>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
