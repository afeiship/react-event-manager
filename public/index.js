import ReactDemokit from '@jswork/react-demokit';
import ReactEventManager from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import Button from './components/button';
import Panel from './components/panel';
import EventMitt from '@jswork/event-mitt';
import './assets/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    Object.assign(this, EventMitt);
  }

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-dice">
        <ReactEventManager value={this}>
          <div className="app-container">
            <Panel />
            <Button>I AM a button</Button>
          </div>
        </ReactEventManager>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
