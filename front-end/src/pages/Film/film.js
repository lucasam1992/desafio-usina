import React from 'react';
import ListFilms from '../../components/ListFilms';
import Header from '../../components/Header/index';
import AddMovieButton from '../../components/AddMovieButton';

const Film = () => {
  return (
    <div>
      <Header/>
      <ListFilms />
      <AddMovieButton/>
    </div>
  );
};

export default Film;