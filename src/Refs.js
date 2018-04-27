import React, { Component } from "react";

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.textInputClass = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    this.textInputClass.current.focusTextInput();
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <h2>Refs</h2>
        <p>
          In the typical React dataflow, props are the only way that parent
          components interact with their children. To modify a child, you
          re-render it with new props. However, there are a few cases where you
          need to imperatively modify a child outside of the typical dataflow.
          The child to be modified could be an instance of a React component, or
          it could be a DOM element. For both of these cases, React provides an
          escape hatch using refs.
        </p>
        <p>Using Refs</p>
        <ul>
          <li>To create a ref, use: React.createRef()</li>
          <li>To access a ref, use: this.*refname*.current</li>
        </ul>
        <p>
          Example: Using a ref to store a reference to a DOM node (input). React
          assigns the "current" property to the DOM element when the component
          mounts, and will assign it to null when it unmounts. Ref updates
          happen before componentDidMount or componentDidUpdate lifecycle hooks.
        </p>
        <input className="inputStyle" type="text" ref={this.textInput} />
        <input
          className="buttonStyle"
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <p>
          Example: If we wanted to wrap the CustomTextInput above to simulate it
          being clicked immediately after mounting, we could use a ref to get
          access to the custom input and call its focusTextInput method manually
          by adding a ref to the class component.
        </p>
        <TextInputClass ref={this.textInputClass} />
        <p className="bold">
          Note: String refs are being deprecated. When updating to 16.3, we will
          need to remove these from our code!
        </p>
      </div>
    );
  }
}

class TextInputClass extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input className="inputStyle" type="text" ref={this.textInput} />
        <input
          className="buttonStyle"
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;
