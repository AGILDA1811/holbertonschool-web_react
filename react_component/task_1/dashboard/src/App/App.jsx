import { Component, Fragment } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";

class App extends Component {
  static defaultProps = {
    logOut: () => {},
  };

  handleKeyDown = (event) => {
    if (!event) return;

    const pressedKey = typeof event.key === "string" ? event.key.toLowerCase() : "";

    if (event.ctrlKey && pressedKey === "h") {
      window.alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <Fragment>
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
