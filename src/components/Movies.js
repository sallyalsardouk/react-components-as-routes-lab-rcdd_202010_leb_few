import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const mappedMovie=Movies.map(movies=>{
    return(
      <div>
      <h2>{movies.name}</h2>
      
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
