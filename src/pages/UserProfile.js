// import fire from "../config/firebase";
// import db from "../config/database";
import PostForm from "../components/postForm";

import Footer from "../components/Footer";
import React, {Component, Fragment} from 'react';

// import fire from "../config/firebase";
import Post from "../components/post";
import Profile from "../components/profile";



class UserProfile extends Component {
  state = {
    post: "abc"
    }
  // constructor () {
  //   db.collection("profile")
  //     .doc("input string 2")
  //     .set({
  //       data: "data",
  //       feedId: "id",
  //   });
    

  // }
  style_background = {
    // backgroundColor: '#efefef',
    // margin: ''
  }
  render() { 
    return (  
      <Fragment>
        <h1>User Profile</h1>
        <div className="container">
          <div className="row">
            <PostForm />
          </div>
          <div className="row">
            <div className="col-lg-7 order-lg-1 order-md-2 order-sm-2 order-2" style={this.style_background}>
              <Post />
              <Post />
            </div>
            <div className="col-lg-4 order-lg-2 order-md-1 order-sm-1 order-1" style={this.style_background}>
              <Profile />
            </div>

          </div>

        </div>
       
        <Footer />
      </Fragment>

    );
  }
}
 
export default UserProfile;



// function test(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// db.collection("profile")
// .doc("input string")
// .set({
//     data: "data",
//     feedId: "id",
// });