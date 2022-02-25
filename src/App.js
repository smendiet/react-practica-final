import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { makeStyles } from '@material-ui/core';
import Barra from './components/Barra';
import { MOVIES } from "./helpers/movies";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function App() {
  const [searchValue, setSearchValue] = useState("");
  const clases = useStyles();

  return (
    <div className={clases.root}>
      <Barra handleChange={e => setSearchValue(e.target.value)} />
      <Menu items={MOVIES.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))} />
    </div>
  );
}

export default App;
