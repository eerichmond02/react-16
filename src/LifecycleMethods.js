import React, { Component } from "react";
import Counter from "./Counter";

class LifecycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  updateCounter = () => {
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <h2>Lifecycle Method Changes</h2>
        <p>Deprecated methods:</p>
        <ul>
          <li className="bold">componentWillMount</li>
          <ul>
            <li>Replace with componentDidMount</li>
          </ul>
          <li className="bold">componentWillUpdate</li>
          <ul>
            <li>
              Replace with static getDerivedStateFromProps to update state in
              response to props changes
            </li>
          </ul>
          <ul>
            <li>
              Replace with componentDidUpdate to invoke an external callback in
              response to state/props changes
            </li>
          </ul>
          <li className="bold">componentWillReceiveProps</li>
          <ul>
            <li>
              Replace with static getDerivedStateFromProps to update state in
              response to props changes
            </li>
          </ul>
          <ul>
            <li>
              Replace with componentDidUpdate to invoke an external callback in
              response to state/props changes
            </li>
          </ul>
          <ul>
            <li>
              Replace with componentDidUpdate to fetch external data in response
              to state/props changes
            </li>
          </ul>
        </ul>
        <p>New methods:</p>
        <ul>
          <li className="bold">getDerivedStateFromProps</li>
          <ul>
            <li>
              The new static getDerivedStateFromProps lifecycle is invoked after
              a component is instantiated as well as when it receives new props.
              It can return an object to update state, or null to indicate that
              the new props do not require any state updates.
            </li>
          </ul>
          <li className="bold">getSnapshotBeforeUpdate</li>
          <ul>
            <li>
              The new getSnapshotBeforeUpdate lifecycle is called immediately
              before mutations are made (e.g. before the DOM is updated). The
              return value for this lifecycle will be passed as the third
              parameter to componentDidUpdate. (This lifecycle isn’t often
              needed, but can be useful in cases like manually preserving scroll
              position during rerenders.)
            </li>
            <li>
              This method can return a value for React to pass as a parameter to
              componentDidUpdate, which gets called immediately after mutations.
              This becomes the third parameter of componentDidUpdate, like so:
              <br /> componentDidUpdate(prevProps, prevState, snapshot)
            </li>
          </ul>
        </ul>
        <p>
          Example: The counters below show the count tracked in the Lifecycle
          Method component's state (parent component). This count is passed down
          to the Counter component, which updates its own state when props
          changes. This is done via the new getDerivedStateFromProps method.
        </p>
        <button onClick={this.updateCounter}>Update State</button>
        <h3>Parent Component Counter: {this.state.counter}</h3>
        <Counter counter={this.state.counter} />
        <p>Note: All lifecycle methods are executing on the child (counter) component.</p>
      </div>
    );
  }
}

export default LifecycleMethods;
