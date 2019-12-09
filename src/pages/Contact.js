import React, { useState, Component } from 'react'
import styled from "styled-components";
import Footer from "../components/Footer";
import * as emailjs from 'emailjs-com'
import Layout from "../components/layout";
import Space from "../components/Space";
import { Button, FormFeedback, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Card from "react-bootstrap/Card";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 88vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-repeat: repeat;
  background-size: cover;
`;

const ContainCard = styled.div`
margin-top: 55px;
`;


export default class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  



  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state 
    let templateParams = {
      from_name: email,
      to_name: 'FoodFight Team',
      subject: subject,
      message_html: message,
     }
    emailjs.send(
      'gmail',
      'template_sgDdfzJb',
       templateParams,
      'user_rj3G7WZ54ogfDJ4YC7lhj'
     )
     this.resetForm()
 }
 resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }


  
  render() {
    return (
      <>
      <Container fluid>
      <Space height="80px"/>;
        <Layout>
        <ContainCard>
        <Card border="success" style={{ width: "40rem", padding:"40px"}}>
        <Card.Header as="h1">Want to fight? Let us know</Card.Header>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-dark">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup><FormGroup controlId="formBasicName">
              <Label className="text-dark">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup><FormGroup controlId="formBasicSubject">
              <Label className="text-dark">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup><FormGroup controlId="formBasicMessage">
              <Label className="text-dark">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Enter your message here"
              />
            </FormGroup><Button color="success" type="submit">
              Submit
            </Button>
          </Form>
          </Card>
          </ContainCard>
          <Space height="200px"/>;
        </Layout>
        </Container>
        <Footer />
      </>
    )
  }
} 

