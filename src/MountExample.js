import React, { Component } from "react";

export default class MountExample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    console.log("in constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("in getDerivedStateFromProps");
    if (props.name != null && props.name !== state.name) {
      return {
        name: props.name,
      };
    }
    return null;
  }

  render() {
    console.log("in render");
    return <p>My name is:{this.state.name}</p>;
  }

  componentDidMount() {
    console.log("in componentDidMount");
  }

  componentWillUnmount() {
    console.log("in componentWillUnmount");
  }
}
