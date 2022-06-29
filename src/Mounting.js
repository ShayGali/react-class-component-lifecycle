import React, { Component } from "react";

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    console.log("1.in constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2.in getDerivedStateFromProps");
    if (props.name != null && props.name !== state.name) {
      return {
        name: props.name,
      };
    }
    return null;
  }

  render() {
    console.log("3.in render");
    return <p>My name is:{this.state.name}</p>;
  }

  componentDidMount() {
    console.log("4.in componentDidMount");
  }
}
