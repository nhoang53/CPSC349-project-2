import React, {Component, Fragment} from 'react';

// import fire from "../config/firebase";
import Feet from "../components/feet";
import Profile from "../components/profile";

import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "reactstrap";
import fire from "../config/firebase";
import db from "../config/database";
import Space from "../components/Space";
import Footer from "../components/Footer";

import noImage from "../images/no-img.png";
import background from "../images/home-background-2.jpg";
// import noImage from "../images/no-img-2.png";
import firebase from 'firebase/app';

var storage = firebase.storage();
var hidden = "hidden";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url(${background});
  background-repeat: repeat;
  background-size: cover;
`;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      fireErrors: "",
      image: "",
      website: '',
      progress: 0
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  uploadImage = event => {
    const image = event.target.files[0];
    this.setState(() => ({image}));
    const progress = 0;
    this.setState({progress});
    hidden = "";
  };

  // handleChange = e => {  
  //   hidden = "hidden";  
  //   if (e.target.files[0]) {      
  //     const image = e.target.files[0];
  //     this.setState(() => ({image}));
  //     const progress = 0;
  //     this.setState({progress});
  //   }
  // }
  
  handleUpload = () => {    
    const {image} = this.state;
    if(image !== null){
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', (snapshot) => {
          // processing
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({progress});
        }, 
        (error) => {console.log(error);}, () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
      });
    }
  }

  render() {
    const style = {
      // height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center' };
   
    return (
      <div>
        <Container>
          <Card style={{ width: "40rem" }}>
            <Card.Header as="h4">Profile</Card.Header>
            <Card.Body>
              <center>
                <div>
                  <div>
                    <input type="file" onChange={this.uploadImage}/>
                    <button onClick={this.handleUpload}>Upload</button>
                  </div>
                  <progress value={this.state.progress} hidden={hidden} max="100"/>
                  <br/>
                  <img src={this.state.url || noImage} alt="Uploaded images" height="150" width="150"/>
                </div> 

                {/* <Form.Label htmlFor="image" className="custom-file-label">
                        Choose your portfolio image
                      </Form.Label>
                      <Form.Control
                        id="image"
                        type="file"
                        name="image"
                        className="custom-file-input form-control"
                        accept="image/*"
                        onChange={this.showImage}
                        required
                      /> */}
              </center>
              
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="username"
                      name="username"
                      // required
                      autoFocus={true}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Input
                    value={this.state.password}
                    // onChange={this.handleChange}
                    type="password"
                    name="password"                    
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>About yourself</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="yourself"
                      name="yourself"                                            
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Location"
                      name="location"                                            
                    />
                </Form.Group>                

                <Button onClick={this.register} variant="primary" type="cancel">
                  Cancel
                </Button>
                &nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp; &nbsp;	                          
                <Button onClick={this.register} variant="primary" type="submit">
                  Save
                </Button>
              </Form>
              <Space height="20px" />             
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </div>
      
    );
  }
}


// class UserProfile extends Component {
//   state = {  }
//   style_background = {
//     // backgroundColor: '#efefef',
//     // margin: ''
//   }
//   render() { 
//     return (  
//       <Fragment>
//         <h1>User Profile</h1>
//         <div class="container">
//           <div class="row">
//             {/* <div class="col-lg-7 order-lg-1 order-md-2 order-sm-2 order-xs-2" 
//             style={this.style_background}>
//               <Feet />
//               <Feet />
//             </div> */}
//             <div class="col-lg-4 order-lg-2 order-md-1 order-sm-1 order-xs-1" 
//             style={this.style_background}>
//               <Profile />
//             </div>

//           </div>

//         </div>
       

//       </Fragment>

//     );
//   }
// }
 
export default UserProfile;