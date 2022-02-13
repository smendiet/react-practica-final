import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
  },
  tarjeta: {
  },
  media: {
    height: 450,
    width: "100%",
    objectFit: "cover"
  },
  content: {
    height: "48px"
  }
}));

const MenuItem = (props) => {
  const clases = useStyles();

  return (
    <Grid className={clases.item} item lg={3} md={4} sm={6} xs={12}>
      <Card className={clases.tarjeta}>
        <CardActionArea onClick={() => window.open(`https://www.imdb.com/title/${props.id}`)}>
          <CardMedia
            className={clases.media}
            component="img"
            alt={props.title}
            height="100%"
            width="49px"
            image={"./images/movies/" + props.id + ".jpg"}
            title={props.title}
          />
          <CardContent className={clases.content}>
            <Typography align="center" gutterBottom>
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default MenuItem;