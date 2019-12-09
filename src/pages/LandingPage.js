import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Space from "../components/Space";
import Footer from "../components/Footer";
import {
  GiCornucopia,
  GiCarrot,
  GiHerbsBundle,
  GiPizzaSlice
} from "react-icons/gi";

const Container = styled.div`
  height: 100%;
  padding-left: 150px;
  padding-top: 200px;
  padding-bottom: 200px;
  color: #343434;
  background-color: rgba(248, 247, 216, 0.7);
`;
const StyledJumbo = styled(Jumbotron)`
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderText = styled.h1`
  font-size: 100px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-align: center;
  justify-content: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 200px;
  text-align: justify;
`;

const ColumnComponent = props => (
  <ColumnContainer>
    <props.icon size="75px" />
    <Space height="20px" />
    <h3>{props.heading}</h3>
    <p>{props.text}</p>
  </ColumnContainer>
);

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <StyledJumbo fluid>
          <Container>
            <HeaderText>Food Fight!</HeaderText>
            <p>Arguing about food has never been easier.</p>
            <a href="/register">
              <Button variant="light" size="lg">
                Register Now
              </Button>
            </a>
          </Container>
        </StyledJumbo>
        <Space height="140px" />
        <InfoContainer>
          <h1>Why Food Fight?</h1>
        </InfoContainer>
        <Space height="75px" />
        <InfoContainer>
          <ColumnComponent
            icon={GiCarrot}
            heading={"Incredible"}
            text={
              "Food is any substance[1] consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth."
            }
          />
          <Space width="300px" />
          <ColumnComponent
            icon={GiHerbsBundle}
            heading={"Edible"}
            text={
              "Historically, humans secured food through two methods: hunting and gathering and agriculture, which gave modern humans a mainly omnivorous diet. Worldwide, humanity has created numerous cuisines and culinary arts, including a wide array of ingredients, herbs, spices, techniques, and dishes."
            }
          />
          <Space width="300px" />
          <ColumnComponent
            icon={GiPizzaSlice}
            heading={"Beatdown"}
            text={
              "Today, the majority of the food energy required by the ever increasing population of the world is supplied by the food industry. Food safety and food security are monitored by agencies like the International Association for Food Protection, World Resources Institute, World Food Programme, Food and Agriculture Organization, and International Food Information Council. "
            }
          />
        </InfoContainer>
        <Space height="200px" />
        <InfoContainer>
          <h1>What are you waiting for?</h1>
        </InfoContainer>
        <Space height="25px" />
        <InfoContainer>
          <GiCornucopia size="100px" />
        </InfoContainer>
        <Space height="50px" />
        <InfoContainer>
          <a href="/login">
            <Button variant="primary" size="lg">
              Login
            </Button>
          </a>
          <Space width="100px" />
          <a href="/register">
            <Button variant="secondary" size="lg">
              Register
            </Button>
          </a>
        </InfoContainer>
        <Space height="200px" />
        <Footer />
      </div>
    );
  }
}
