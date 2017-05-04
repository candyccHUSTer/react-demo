import React from 'react';

const style = require('./app.scss');

export default () => (
  <div>
    <h1 className={style.red}>Hello World!</h1>
    <h2 className="blue">Welcome~~~</h2>
  </div>
);

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/
