import React, { Fragment} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "../index.css";
import MenuItem from "./MenuItem";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pagName: {
    marginTop: "15px",
    marginBottom: "10px",
  },
  container: {
  }
}));

const Menu = (props) => {
  const clases = useStyles();

  return (
    <Fragment>
      <Container className={clases.container}>
        <Typography className={clases.pagName} variant="h4" component="h5">Películas</Typography>
        <Grid container spacing={2}>
          {
            props.items.map((movie, index) => {
              return <MenuItem key={movie.id} id={movie.id} title={movie.title} />
            })
          }
        </Grid>
      </Container>
    </Fragment>
  );
}

Menu.propTypes = {
  items: PropTypes.array
}

export default Menu;