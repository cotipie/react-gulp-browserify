// React をロード
var React = require('react');
// 外部ファイルへ分割した Message クラスをロード
var Message = require('./message.js');
// jquery使う系の外部js
var appjs = require('../js.js');

// このアプリケーションのメインとなる App クラス
var App = React.createClass({
  getInitialState: function() {
    return {
      person: {
        name: 'ながた',
        age: 26
      }
    };
  },
  handleChange: function(event) {
    this.setState({
      person: {
        name: event.target.value,
        age: this.state.person.age
      }
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.person.name} onChange={this.handleChange} />
        <Message name={this.state.person.name} age={this.state.person.age} />
      </div>
    );
  }
});

// app クラスを描画
React.render(
  <App />,
  document.getElementById('container')
);
