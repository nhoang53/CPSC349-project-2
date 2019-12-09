import React from "react";
import styled from "styled-components";
import Space from "../components/Space";

const Container = styled.div`
  width: 100%;
  background-color: rgba(248, 247, 216, 0.9);
  color: #343434;
`;
const Text = styled.p`
  padding-left: 50px;
`;

export default class FooterComponent extends React.Component {
  render() {
    return (
      <Container>
        <Space height="25px" />
        <Text>© 2019, Group Project Names</Text>
        <Space height="10px" />
      </Container>
    );
  }
}
