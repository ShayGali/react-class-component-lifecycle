import React, { Component } from "react";

export default class Unmounting extends Component {
  render() {
    return <p>Hello world!</p>;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
