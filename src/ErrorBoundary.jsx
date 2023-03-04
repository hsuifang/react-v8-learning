import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically you would log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
      // <h2>
      //   There was an error
      //   <Link to="/">Click here</Link> to back to the home page.{" "}
      // </h2>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
