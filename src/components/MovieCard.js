import React, { useEffect, useState } from 'react';
import { fetchDogImage } from '../api/fetchDogImage';

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const getDogImage = async () => {
      const image = await fetchDogImage();
      setDogImage(image);
    };

    getDogImage();
  },[movie]);

  return (
    <div className="duration-300 max-w-sm rounded w-full overflow-hidden shadow-md my-4 h-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-md hover:shadow-amber-50 text-white">
      <img className="h-64 w-full" src={dogImage} alt="Random Dog" />
      <div className="px-6 py-4">
        <div className="h-fit font-bold text-xl mb-2 text-white">{movie.title}</div>
        <p className="text-base">
          {movie.author_name && `Author: ${movie.author_name.join(', ')}`}
        </p>
        <p className="text-base">
          {movie.first_publish_year && `Published: ${movie.first_publish_year}`}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
