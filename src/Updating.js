import React, { Component } from "react";

export default class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: "", lname: "gali" };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("1.in getDerivedStateFromProps ");
    if (props.fname != null && props.fname !== state.fname) {
      return {
        fname: props.fname,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2.in shouldComponentUpdate");
    if (nextProps.fname !== this.props.fname) {
      return true;
    } else return false;
  }

  render() {
    console.log("3.in render");
    return (
      <div>Your name is {`${this.state.fname} + ${this.state.lname}`}</div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4.in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("5.in componentDidUpdate");
  }
}
