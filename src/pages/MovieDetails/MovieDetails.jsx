import { H2 } from 'pages/Home/Home.styled';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovie, API_IMG_URL } from 'services/api-movies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    fetchMovie({ movie_id: movieId }).then(response => {
      console.log(response);
      setMovieData(response.data);
    });
  }, []);

  return (
    <section>
      <H2>Movie Details</H2>
      {movieData && (
        <>
          <img src={API_IMG_URL + movieData.poster_path} alt="movie poster" />
          <h3>{movieData.title}</h3>
          <p>{movieData.overview}</p>
        </>
      )}
      <Outlet />
    </section>
  );
};

export default MovieDetails;
