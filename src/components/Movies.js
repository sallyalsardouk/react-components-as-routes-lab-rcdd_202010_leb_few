import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const mappedMovie=movies.map(movie=>{
    return(
      <div>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
        <p>Genres:
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </p>
      
      </div>
      )
  })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {mappedMovie}
    </div>
  );
};

export default Movies;
