import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie, API_IMG_URL } from 'services/api-movies';
import { AdditionalInfo, Content, Div, MovieCard } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    fetchMovie({ movie_id: movieId }).then(response => {
      setMovieData(response.data);
    });
  }, [movieId]);

  const location = useLocation();

  return (
    <section>
      {movieData && (
        <Content>
          <Link to={location.state?.from ?? '/'}>← Go back</Link>
          <MovieCard>
            <img src={API_IMG_URL + movieData.poster_path} alt="movie poster" />
            <div>
              <h2>{movieData.title}</h2>
              <p>
                User score: <b>{movieData.vote_average}</b>
              </p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <p>
                {movieData.genres.map(({ id, name }) => (
                  <span key={id}>{name}</span>
                ))}
              </p>
            </div>
          </MovieCard>
          <Div>
            <h3>Additional information</h3>
            <p>
              <Link to="cast" state={{ from: location.state.from }}>
                Cast
              </Link>
            </p>
            <p>
              <Link to="reviews" state={{ from: location.state.from }}>
                Reviews
              </Link>
            </p>
          </Div>
        </Content>
      )}
      <AdditionalInfo>
        <Suspense fallback={<section>Loading...</section>}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </section>
  );
};

export default MovieDetails;
