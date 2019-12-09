import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "reactstrap";
import fire from "../config/firebase";
import styled from "styled-components";
import Space from "../components/Space";
import FooterComponent from "../components/Footer";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 87vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1549248287-f371a6246ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: repeat;
  background-size: cover;
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fireErrors: ""
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        this.setState({ fireErrors: error.message });
      });
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
            <Card.Header as="h4">Login</Card.Header>
            {errorNotification}
            <Card.Body>
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
                <Button onClick={this.login} variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <Space height="20px" />
              <Card.Text>
                <a href="/register">Don't have an account? Register here!</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}
