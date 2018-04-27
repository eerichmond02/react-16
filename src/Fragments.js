import React, { Component, Fragment } from "react";

class Fragments extends Component {
  render() {
    return (
      <Fragment>
        <p>
          Fragments can be used to return multiple elements without wrapping
          them in an extra node. Key is the only attribute that can be passed to Fragment.
        </p>
        <p>
          This can be done using the Fragment tag (import from react), or by
          using empty tags. Note that empty tags do not accept attributes!
        </p>
      </Fragment>
    );
  }
}

export default Fragments;
