import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_IMG_URL, fetchCast } from 'services/api-movies';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState();

  useEffect(() => {
    console.log('movieId', movieId);
    if (movieId)
      fetchCast({ movie_id: movieId })
        .then(response => {
          console.log(response);
          setCastData(response.data);
        })
        .catch(err => console.error(err));
  }, [movieId]);

  return (
    <CastList>
      {castData &&
        castData.cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              {profile_path && (
                <img src={API_IMG_URL + profile_path} alt={name} />
              )}
              <h3>{name}</h3>
              <p>
                Character: <span>{character}</span>
              </p>
            </li>
          );
        })}
    </CastList>
  );
};

export default Cast;
