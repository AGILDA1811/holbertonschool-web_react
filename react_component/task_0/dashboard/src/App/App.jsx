import { Component, Fragment } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";

class App extends Component {
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
