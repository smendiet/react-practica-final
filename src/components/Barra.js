import { AppBar, Toolbar as ToolBar, Typography } from "@material-ui/core";
import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import { InputBase } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    }
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "content"
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      }
    }
  } 
}));

const Barra = (props) => {
  const clases = useStyles();

  return (
    <div className={clases.root}>
      <AppBar position="static">
        <ToolBar>
          <Typography className={clases.title} variant="h6">PWA-Project</Typography>
          <div className={clases.search}>
            <div className={clases.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: clases.inputRoot,
                input: clases.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={props.handleChange}
            />
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
}

Barra.propTypes = {
  handleChange: PropTypes.func
}

export default Barra;