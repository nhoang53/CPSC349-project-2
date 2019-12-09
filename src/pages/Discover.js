import React from "react";
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

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
  background-attachment: fixed;
  background-size: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CardLayout = props => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        <b>Price: </b> {props.price}
        <br />
        <b>Ratings: </b> {props.rating}
      </Card.Text>
      <a href={props.link}>
        <Button variant="primary">Visit Page</Button>
      </a>
    </Card.Body>
  </Card>
);

export default class Discover extends React.Component {
  state = {
    location: "New York",
    data: []
  };

  getLocation = () => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${
          this.state.location
        }`,
        {
          headers: {
            Authorization: `Bearer SDDBhNcjj1HpzAHUGSNNePbni7EJ5bbUVJyYD4WMeWhc0rhYgaiaOFY51Q02uiXZRg-_mOw9El2zko5IDpiOjWgEHJrJMfi8cldsea0y33kf2nwDGiWqx_m_EnHpXXYx`
          },
          params: {
            categories: "food",
            limit: 20
          }
        }
      )
      .then(res => {
        console.log(res.data.businesses);
        this.setState({ data: res.data.businesses });
      })
      .catch(err => {
        console.log("error ", err);
      });
  };

  handleChange = event => {
    this.setState({ location: event.target.value });
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <div>
        <Container>
          <Space height="100px" />
          <Alert variant={"light"}>
            <h2>Discover New Food To Fight About</h2>
          </Alert>
          <Space height="25px" />
          <Form inline>
            <FormControl
              type="text"
              placeholder="Enter Your City"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button variant="outline-success" onClick={this.getLocation}>
              Search
            </Button>
          </Form>
          <Space height="100px" />
          <CardGroup>
            {this.state.data.length === 0 ? (
              <Alert variant={"light"}>Now Loading...</Alert>
            ) : (
              this.state.data.map((data, key) => (
                <CardContainer key={key}>
                  <Space width="20px" />
                  <CardLayout
                    img={data.image_url}
                    name={data.name}
                    link={data.url}
                    price={data.price}
                    rating={data.rating}
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
