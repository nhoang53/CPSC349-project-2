import React from "react";
import fire from "./config/firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/faq";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import UserProfile from "./pages/UserProfile";
// import UserProfile from "./pages/UserProfileJosephVersion";
import Discover from "./pages/Discover";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  PrivateRoute = ({ children, ...props }) => {
    return (
      <Route
        path={props.path}
        render={({ location }) =>
          this.state.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

  RedirectLoginReg = ({ children, ...props }) => {
    console.log(props);
    return (
      <Route
        path={props.path}
        render={({ location }) =>
          this.state.user === null ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        console.log("user", user);
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        {
          <Router>
            <Navbar />
            <Switch>
              <this.PrivateRoute path="/home">
                <Home />
              </this.PrivateRoute>
              <Route path="/faq">
                <Faq />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/landingpage">
                <LandingPage />
              </Route>
              <Route path="/discover">
                <Discover />
              </Route>
              <Route path="/UserProfile">
                <UserProfile />
              </Route>
              <this.RedirectLoginReg path="/login">
                <Login />
              </this.RedirectLoginReg>
              <this.RedirectLoginReg path="/register">
                <Register />
              </this.RedirectLoginReg>
              {/* <this.PrivateRoute path="/userprofile">
                <UserProfile />
              </this.PrivateRoute> */}
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Router>
        }
      </div>
    );
  }
}
