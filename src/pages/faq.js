import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Space from "../components/Space";
import Footer from "../components/Footer";

const StyledJumbo = styled(Jumbotron)`
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  height: 100%;
  padding-left: 150px;
  padding-top: 200px;
  padding-bottom: 200px;
  color: #343434;
  background-color: rgba(248, 247, 216, 0.7);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-align: center;
  justify-content: center;
  padding-left: 100px;
`;

const questions = [
  {
    question: "1. What is food fight?",
    answer: "You fight about food"
  },
  {
    question: "2. Why fight about food?",
    answer: "Unleash your carnal rage"
  },
  {
    question: "3. Why should I care?",
    answer: "Its cool trust me"
  }
];

const Question = props => (
  <div>
    <h3>{props.question}</h3>
    <p>{props.answer}</p>
  </div>
);

export default class Faq extends React.Component {
  render() {
    return (
      <div>
        <StyledJumbo fluid>
          <Container>
            <h1>Frequently Asked Questions</h1>
            <p>Read on to find out more about what Food Fight is all about.</p>
          </Container>
        </StyledJumbo>
        <Space height={"200px"} />
        <InfoContainer>
          {questions.map(current => {
            return (
              <div>
                <Question question={current.question} answer={current.answer} />
                <Space height={"50px"} />
              </div>
            );
          })}
        </InfoContainer>
        <Space height={"150px"} />
        <Footer />
      </div>
    );
  }
}
