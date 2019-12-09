import React from "react";
import fire from "../config/firebase";

export default class LoginTest extends React.Component {
  render() {
    return (
      <div>
        <h2>Logging in successfully</h2>
        <button onClick={()=> fire.auth().signOut()}>SignOut</button>
      </div>
    );
  }
}
