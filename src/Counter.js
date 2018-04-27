import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: null
    };
  }

  componentDidMount() {
    alert("Component mounted!");
  }

  componentWillUnmount() {
    alert("Component is unmounting...");
  }

  componentDidUpdate() {
    alert("Component updated!");
  }

  shouldComponentUpdate() {
    if (window.confirm("Should component udpate?")) {
      return true;
    } else {
      return false;
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    alert("Component received new props!");
    if (nextProps.counter !== prevState.counter) {
      return { counter: nextProps.counter };
    }
  }

  render() {
    return (
      <div>
        <h3>Child Component Counter: {this.state.counter}</h3>
      </div>
    );
  }
}

export default Counter;
