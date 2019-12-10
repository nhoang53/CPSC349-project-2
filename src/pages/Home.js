import React from "react";
import fire from "../config/firebase";
import db from "../config/database";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Space from "../components/Space";
import FooterComponent from "../components/Footer";
import CardGroup from "react-bootstrap/CardGroup";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner'
import { Progress } from 'reactstrap';
import noImage from "../images/no-img.png";
import background from "../images/home-background-3.jpg";
import firebase from 'firebase/app';
import Modal from '../components/modal';

var storage = firebase.storage();
var hidden = "hidden"

// const Container = styled.div`
//   display: flex;
//   margin: none;
//   background-image: url("https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80");
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100%;
//   height: 88vh;
//   justify-content: center;
//   align-items: center;
// `;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  // background-image: url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-left: 30px;
  variant: bottom;
`;

const CardLayout = props => (
  <Card style={{ width: "18rem"}}>
    <Card.Img style={{height: "30vh"}} variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.username}</Card.Title>
      <Card.Text>
        {props.content}
        <br />
      </Card.Text>
    </Card.Body>
  </Card>
);

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      username : null,
      image: null,
      email: null,

      post : [],   // post will have content, image, uid, username

      imageUpload: null, 
      imageLink: null,
      newPostcontent: null
    };
    this.handlePostFight = this.handlePostFight.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ 
          uid : user.uid,
          image : user.photoURL,
          email : user.email,
          username : user.displayName
        });
        
        console.log("username: ", this.state.username);
        console.log("user: ", user);
              
        db.collection("post").get()
          .then((querySnapshot) => {
              let post = [];
              querySnapshot.forEach((doc) => {
                  // console.log(doc.id, " => ", doc.data());
                  if(doc){                   
                    post.push({
                      postid : doc.id,
                      postimage: doc.data().image,                                          
                      postuid: doc.data().uid,
                      postusername: doc.data().username,
                      postcontent: doc.data().content
                    });
                    if(doc.data().image === null) post.postimage = noImage;
                  }});
                  this.setState({post : post});   
                  console.log("post: ", this.state.post); // array                 
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });

      } else {
        this.setState({ user: null });
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDisplayImage = event => {
    const imageUpload = event.target.files[0];  // object
    this.setState({
      imageLink: URL.createObjectURL(event.target.files[0])
    });
    this.setState(() => ({imageUpload}));    
    const progress = 0;
    this.setState({progress});
    hidden = "";   
  };

  handlePostFight = event => {  
    event.preventDefault();

    const {imageUpload} = this.state;
    if(imageUpload !== null){
      const uploadTask = storage.ref(`post/${imageUpload.name}`).put(imageUpload);
      uploadTask.on('state_changed', (snapshot) => {
          // processing
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({progress});
        }, 
        (error) => {console.log(error);}, 
        () => { // complete function ....
          storage.ref('post').child(imageUpload.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});

            db.collection("post").doc().set({
              content: this.state.newPostcontent,
              image: this.state.url,
              uid: this.state.uid,
              username: this.state.username
            })
              .catch(function(error) {
                  console.log("Error getting documents: ", error);
              });

              window.location.reload(false);
            })
      });
    }
  }

  render() {    
    return (
      <div>
          <Container>
          <Space height="30px" />
          <Card style={{ width: "40rem" }}>
            {/* <Card.Header as="h4">Profile</Card.Header> */}
            <Card.Body>          
              <Form>
                <Form.Group controlId="formBasicUsername">
                  {/* <Form.Label>Content</Form.Label> */}
                  <Form.Control 
                    as="textarea"
                    // type="textarea"
                    rows={2}
                    placeholder="Write some fight"
                    name="newPostcontent"
                    value={this.state.newPostcontent}
                    onChange={this.handleChange}
                  />
                  {/* <Form.Control
                      type="textarea"
                      // rows={5} // doesn't work
                      placeholder="Write some fight"
                      name="newPostcontent"
                      value={this.state.newPostcontent}
                      onChange={this.handleChange}
                    /> */}
                </Form.Group>                 
                {/* <center> */}
                <div>
                  <div>
                    <input type="file" onChange={this.handleDisplayImage}/>                                 
                    <Button color="info" onClick={this.handlePostFight}>&nbsp;&nbsp; Fight &nbsp;&nbsp;</Button>
                    <br />
                  </div>
                  <br/>
                  <Progress color="info" value={this.state.progress} hidden={hidden} max="100"/>
                  <br/>
                  <img src={this.state.url || this.state.imageLink} alt="image upload" 
                                hidden={hidden} height="150" width="150"/>
                </div>                
                <br/>               
              </Form>
            </Card.Body>
          </Card>

          <CardGroup>
            {this.state.post.length === 0 ? (
              <Spinner animation="border" variant="info" >
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              this.state.post.map((post, postid) => (
                <CardContainer key={postid}>
                  <Space width="20px" />
                  <CardLayout
                    image={post.postimage}
                    username={post.postusername}
                    content={post.postcontent}                    
                  />
                  <Space width="20px" />
                </CardContainer>
              ))
            )}
          </CardGroup>
          <Space height="100px" />
        </Container>
        <FooterComponent />
      </div>
    );
  }
}
