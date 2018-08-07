import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";

/**
 * If we have no result, we can't detect it, so make the display that.
 */
const ResultEmptyDecoration = value => {
  if (!value) {
    value = "Unable to Detect";
  }
  return value;
};

const ResultCard = ({ image, result, resultDetailed, description }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Image src={image} floated="left" />
        <Card.Header>{ResultEmptyDecoration(result)}</Card.Header>
        <Card.Meta>{ResultEmptyDecoration(resultDetailed)}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

ResultCard.propTypes = {
  image: PropTypes.string.isRequired,
  result: PropTypes.string,
  resultDetailed: PropTypes.string,
  description: PropTypes.string
};

export default ResultCard;
