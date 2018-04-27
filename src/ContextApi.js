import React, { Component } from "react";

const themes = {
  dark: {
    color: "#262e30"
  },
  light: {
    color: "#00d8ff"
  }
};

const ThemeContext = React.createContext(
  themes.dark // default value
);

const ThemedText = props => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <h3
          {...props}
          style={{
            color: theme.color
          }}
        >
          {props.text}
        </h3>
      )}
    </ThemeContext.Consumer>
  );
};

class ContextAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return (
      <div>
        <h2>Context API</h2>
        <p>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level. Context is designed
          to share data that can be considered “global” for a tree of React
          components, such as the current authenticated user, theme, or
          preferred language.
        </p>
        <p>
          Consumer/Provider pairs can be used. When React renders a context
          Consumer, it will read the current context value from the closest
          matching Provider above it in the tree. If there is no Provider, it
          will use the default.
        </p>
        <p>
          Example: A Theme Context has been created with a default theme of
          dark. Theme is also being tracked in state, and is toggled when the
          button is clicked. Both headers below use a Consumer tag, and use
          theme.color as the text color. Header 1 is wrapped in a Provider tag
          whose value is equal to this.state.theme, and Header 2 is not wrapped
          in a Provider tag.
        </p>
        <button
          onClick={this.toggleTheme}
        >
          Toggle Theme
        </button>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedText text="Header 1" />
        </ThemeContext.Provider>
        <ThemedText text="Header 2" />
      </div>
    );
  }
}

export default ContextAPI;
