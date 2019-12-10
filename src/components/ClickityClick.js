import React, { Component } from "react";

export default class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
      count: 0
    };
  }

  handleClick = () => {
    let newCount = this.state.count + 1;

    this.setState(previousState => {
      return {
        hasBeenClicked: true,
        count: previousState.count + 1
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
