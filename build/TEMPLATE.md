# react-event-manager
> Event bus meet react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-event-manager
```

## properties
__GENERATE_DOCS__

## usage
1. import css
  ```scss
  @import "~@jswork/react-event-manager/dist/style.css";

  // or use sass
  @import "~@jswork/react-event-manager/dist/style.scss";

  // customize your styles:
  $react-event-manager-options: ()
  ```
2. import js
  ```js
  /*1. app.js register the event-manager(eventBus) for SPA `app instance` */
  import ReactEventManager from '@jswork/react-event-manager';
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


  /*2. publish: panel.js emit the event: ok/cancel */
  import React from 'react';
  import { event } from '@jswork/react-event-manager';

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
            onClick={(e) => {
              this.props.$app.emit('panel:cancel');
            }}>
            Panel will cancel action
          </button>
        </div>
      );
    }
  }

  /*3. subscribe: button.js subscribe panel event */
  import React from 'react';
  import { event } from '@jswork/react-event-manager';

  @event
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
  ```

## documentation
- https://afeiship.github.io/react-event-manager/


## license
Code released under [the MIT license](https://github.com/afeiship/react-event-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-event-manager
[version-url]: https://npmjs.org/package/@jswork/react-event-manager

[license-image]: https://img.shields.io/npm/l/@jswork/react-event-manager
[license-url]: https://github.com/afeiship/react-event-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-event-manager
[size-url]: https://github.com/afeiship/react-event-manager/blob/master/dist/react-event-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-event-manager
[download-url]: https://www.npmjs.com/package/@jswork/react-event-manager
