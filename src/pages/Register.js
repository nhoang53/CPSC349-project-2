import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "reactstrap";
import fire from "../config/firebase";
import db from "../config/database";
import Space from "../components/Space";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1549248287-f371a6246ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: repeat;
  background-size: cover;
`;

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      fireErrors: ""
    };
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  register = e => {
    // console.log (this.state.username);D
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(result => {
        if (result) {
          result.user
            .updateProfile({
              displayName: document.getElementById("username").value,
              photoURL: "https://firebasestorage.googleapis.com/v0/b/food-fighter.appspot.com/o/images%2Fno-img.png?alt=media&token=58c42aea-57a1-460c-a0fe-c69ebdcd4c28"
            })
            .then(s => {
              console.log("displayname", result.user.displayName);
              db.collection("userData")
                .doc(result.user.email)
                .set({
                  uid: result.user.uid,
                  email: result.user.email,
                  name: result.user.displayName,
                  image: "https://firebasestorage.googleapis.com/v0/b/food-fighter.appspot.com/o/images%2Fno-img.png?alt=media&token=58c42aea-57a1-460c-a0fe-c69ebdcd4c28"
                });
            });
        }
      })
      .catch(error => {
        this.setState({ fireErrors: error.message });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div>
        <Card.Header>{this.state.fireErrors}</Card.Header>
      </div>
    ) : null;
    return (
      <div>
        <Container>
          <Card style={{ width: "40rem" }}>
            <Card.Header as="h4">Register</Card.Header>
            {errorNotification}
            <Card.Body>
              All you need to do to start fighting about food is filling out the
              form below- Join today!
              <Space height="20px" />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Input
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="username"
                    name="username"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button onClick={this.register} variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <Space height="20px" />
              <Card.Text>
                <a href="/login">Already have an account? Sign In.</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </div>
    );
  }
}
