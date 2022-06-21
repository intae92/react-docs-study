import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleUpCount = this.handleUpCount.bind(this);
    this.handleDownCount = this.handleDownCount.bind(this);
  }

  handleUpCount() {
    this.setState(({ count: prevCount }) => ({
      count: prevCount + 1,
    }));
  }

  handleDownCount() {
    this.setState(({ count: prevCount }) => ({
      count: prevCount - 1,
    }));
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        {/* <button onClick={this.handleUpCount.bind(this)}>up</button> */}
        <button onClick={this.handleUpCount}>up</button>
        <button onClick={this.handleDownCount}>down</button>
      </div>
    );
  }
}
