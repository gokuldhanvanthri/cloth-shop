import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };

  // Catches any error thrown from the wrapped component
  static getDerivedStateFromError(error) {
    //Process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    return this.state.hasErrored ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl="https://i.imgur.com/QIxIKBH.png" />
        <ErrorImageText>Sorry this page is broken!</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
