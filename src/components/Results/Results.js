import React from "react";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import ResultCard from "../ResultCard/ResultCard";
import IPIcon from "../../images/internet.svg";
import { deriveBrowserIcon, deriveOperatingSystemIcon } from "./IconChooser";

const Results = props => (
  <React.Fragment>
    <Header as="h1" className="center aligned">
      Browser Information
    </Header>
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <ResultCard
            icon={deriveBrowserIcon(props.browser)}
            result={props.browser}
            resultDetailed={props.browserDetailed}
            description="Your Internet Browser"
          />
        </Grid.Column>
        <Grid.Column>
          <ResultCard
            icon={deriveOperatingSystemIcon(props.operatingSystem)}
            result={props.operatingSystem}
            resultDetailed={props.operatingSystemDetailed}
            description="Your Operating System"
          />
        </Grid.Column>
        <Grid.Column>
          <ResultCard
            icon={IPIcon}
            result={props.ipPublic}
            resultDetailed={props.ipPrivate}
            description="Your public IP is bold, the internal is lighter"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
);

Results.propTypes = {
  browser: PropTypes.string,
  browserDetailed: PropTypes.string,
  operatingSystem: PropTypes.string,
  operatingSystemDetailed: PropTypes.string,
  ipPublic: PropTypes.string,
  ipPrivate: PropTypes.string
};

export default Results;
