import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
    </div>
  );
   const mappedDirectors = directors.map(director => {
    return (
      <div>
        <h2>Name: {director.name}</h2>
        <p>Movies:
          <ul>
            {director.movies.map(movie=><li>{movie}</li>)}
          </ul>
        </p>
      </div>
    )
  })
}

export default Directors
