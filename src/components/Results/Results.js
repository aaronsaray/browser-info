import React from "react";
import { Grid, Card, Image, Header } from "semantic-ui-react";
import ChromeImage from "../../images/chrome.svg";
import AppleImage from "../../images/apple.svg";
import IPImage from "../../images/internet.svg";

const ResultCard = (image, header, meta) => {
  return (
    <Card fluid>
      <Card.Content>
        <Image src={image} floated="left" />
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

const Results = () => (
  <React.Fragment>
    <Header as="h1" className="center aligned">
      Browser Information
    </Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          {ResultCard(ChromeImage, "Google Chrome", "Your Internet Browser")}
        </Grid.Column>
        <Grid.Column>
          {ResultCard(AppleImage, "MacOS", "Your Operating System")}
        </Grid.Column>
        <Grid.Column>
          {ResultCard(IPImage, "127.0.0.1", "Your IP Address")}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
);

export default Results;
