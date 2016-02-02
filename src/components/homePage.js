"use strict";

var React = require("react");

var Home = React.createClass(({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Admin Site</h1>
        <p>React testing application</p>
      </div>
    );
  }
}));

module.exports = Home;
