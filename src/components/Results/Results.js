import React from "react";
import PropTypes from "prop-types";
import { Grid, Card, Image, Header } from "semantic-ui-react";
import IPImage from "../../images/internet.svg";

const ResultCard = (image, header, details, description) => {
  return (
    <Card fluid>
      <Card.Content>
        <Image src={image} floated="left" />
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{details}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const Results = props => (
  <React.Fragment>
    <Header as="h1" className="center aligned">
      Browser Information
    </Header>
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          {ResultCard(
            props.browserImage,
            props.browser,
            props.browserDetailed,
            "Your Internet Browser"
          )}
        </Grid.Column>
        <Grid.Column>
          {ResultCard(
            props.operatingSystemImage,
            props.operatingSystem,
            props.operatingSystemDetailed,
            "Your Operating System"
          )}
        </Grid.Column>
        <Grid.Column>
          {ResultCard(
            IPImage,
            props.ipPublic,
            props.ipPrivate,
            "Your public IP is bold, the internal is lighter"
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
);

Results.propTypes = {
  browser: PropTypes.string.isRequired,
  browserDetailed: PropTypes.string.isRequired,
  browserImage: PropTypes.string.isRequired,
  operatingSystem: PropTypes.string.isRequired,
  operatingSystemDetailed: PropTypes.string.isRequired,
  operatingSystemImage: PropTypes.string.isRequired,
  ipPublic: PropTypes.string.isRequired,
  ipPrivate: PropTypes.string.isRequired
};

export default Results;
