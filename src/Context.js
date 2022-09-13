import React, { useState } from 'react';
import { createContext } from 'react';

export const MovieDetails = createContext(null);

const MovieDetailsContext = (props) => {
   const [details, setDetails] = useState([]);

   return (
      <MovieDetails.Provider value={{ details, setDetails }}>
         {props.children}
      </MovieDetails.Provider>
   );
};

export default MovieDetailsContext;