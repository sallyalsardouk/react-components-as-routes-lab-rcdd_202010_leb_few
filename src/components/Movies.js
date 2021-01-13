import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const mappedMovie=Movies.map(movies=>{
    return(
      <div>
      <h2>{movies.title}</h2>
      <p>Time: {movies.time}</p>
        <p>Genres:
          <ul>
            {movies.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </p>
      
      </div>)
  })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
    </div>
  );
};

export default Movies;
