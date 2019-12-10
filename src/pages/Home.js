import React from "react";
import fire from "../config/firebase";
import db from "../config/database";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
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

import noImage from "../images/no-img.png";
import background from "../images/home-background.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80");
  background-attachment: fixed;
  background-size: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CardLayout = props => (
  <Card style={{ width: "18rem", marginTop: "20px" }}>
    <Card.Img style={{height: "25vh"}} variant="top" src={props.image} />
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
  constructor() {
    super();
    this.state = {
      uid: null,
      username : null,
      image: null,
      email: null,

      post : []   // post will have content, image, uid, username
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log("username ", this.state.user.displayName); // nope
        // console.log("uid: ", user.uid);

        this.setState({ 
          uid : user.uid,
          image : user.photoURL,
          email : user.email,
          username : user.displayName
        });

        // if(this.state.user.photoURL === null) 
        //   this.state.user.photoURL="../images/no-img.png"; // cannot assign
        // if(this.state.image === null) 
        //   this.state.image = {noImage};

        console.log("username: ", this.state.username);
        console.log("image: ", this.state.image);
        console.log("email: ", this.state.email);
        console.log("uid: ", this.state.uid);
        console.log("user: ", user);

        db.collection("post").get()
          .then((querySnapshot) => {
              let post = [];
              querySnapshot.forEach((doc) => {
                  if(doc){                   
                    post.push({
                      postid : doc.id,
                      postimage: doc.data().image,                                          
                      postuid: doc.data().uid,
                      postusername: doc.data().username,
                      postcontent: doc.data().content
                    });
                    if(doc.data().image === null)
                      post.postimage = noImage;
                  }                   
                  });

                  this.setState({post : post});   
                  console.log("post: ", this.state.post);
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });

      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {    
    return (
      <div>
          <Container>
          <Space height="100px" />
          <CardGroup style= {{marginLeft: "12rem"}}>
            {this.state.post.length === 0 ? (
              <Alert variant={"light"}>Now Loading...</Alert>
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
