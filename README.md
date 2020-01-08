# react-event-manager
> Event bus meet react.

## installation
```shell
npm install -S @feizheng/react-event-manager
```

## update
```shell
npm update @feizheng/react-event-manager
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | -      | -       | -           |
| onChange  | -      | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-event-manager/dist/style.scss";

  // customize your styles:
  $react-event-manager-options: ()
  ```
2. import js
  ```js
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
        <ReactEventManager app={this}>
          <div className="app-container">
            <Panel />
            <Button>I AM a button</Button>
          </div>
        </ReactEventManager>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-event-manager/
