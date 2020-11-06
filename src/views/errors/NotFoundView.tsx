import React, { Fragment } from "react";
import { Container } from "../../components/ui-kit/container/container";
import { Paper } from "../../components/ui-kit/paper/paper";
import { Typography } from "../../components/ui-kit/typography/typography";

const NotFoundView = () => {
  return (
    <Paper>
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h1">
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle2">
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
      </Container>
    </Paper>
  );
};

export default NotFoundView;
