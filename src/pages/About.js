import React from "react";
import styled from "styled-components";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Fade,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';
import Space from "../components/Space";
import Footer from "../components/Footer";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const StyledJumbo = styled.div`
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1571942676516-bcab84649e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 88vh;
`;

const Container = styled.div`
  alignment-item: center;
`;

const LeftMargin = styled.div`
  margin-left: 40px;
  padding-top: 20px;
  `;

export default class About extends React.Component {
  render() {
    return (
      <div>
        <StyledJumbo fluid>
          <LeftMargin>
          <h1 className="display-3">What is foodfight?</h1>
          <p className="lead" style={{fontSize: "35px"}}>A revolutionary new way of looking at food pictures!</p>
          <hr className="my-2" />
          <p> Well It's probably a little bit more in depth than that.</p>
          <p className="lead">
          </p>
          </LeftMargin>
        <Container>
        <LeftMargin>
        <Space height="100%"/>
            <Row style={{width: "100%"}}>
              <Col sm={4} > 
              <Card border="success" style={{ padding:"25px"}}> 
              Food is the necessity of life. It provides nutrition, sustenance and growth to human body. Food can be classified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food. Food comprises protein, facts, carbohydrates, vitamins, minerals salts and water. Most of the food items contain all these in varying properties. Consequently, different age groups need different food mix. Vitamins and minerals salts do not supply energy but they play a very crucial role. 
              </Card>
              </Col>
                
              <Col sm={4} >
              <Card border="success" style={{  padding:"25px"}}> 
              When we walk into a supermarket, we assume that we have the widest possible choice of healthy foods. But in fact, over the course of the 20th century, our food system has been co-opted by corporate forces whose interests do not lie in providing the public with fresh, healthy, sustainably-produced food. FOOD FIGHT is a fascinating look at how American agricultural policy and food culture developed in the 20th century, and how the California food movement has created a counter-revolution against big agribusiness
              </Card>
              </Col>

              <Col sm={4} >
              <Card border="success" style={{ padding:"25px"}}> 
              Food Fight opens with a bit of history about food production and America's eating habits over the past half century. Beautifully shot and well written, we are treated to a series of interviews with food luminaries such as Alice Waters, Dan Barber  who frankly, hold exactly the same views about food, cooking and eating as I do. These are the people who created the local, seasonal food movement as we know it today and who are at the forefront of trying to exact some change in the way Americans shop and eat.
              </Card>
              </Col>
            </Row>
          </LeftMargin>
          </Container>
          </StyledJumbo>
        <Footer/>
      </div>
    );
  }
}
