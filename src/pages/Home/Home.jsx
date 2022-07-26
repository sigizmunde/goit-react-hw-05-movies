import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api-movies';
import { H2 } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(response => setMovies(response.data.results));
  }, []);

  return (
    <section>
      <H2>Trending today</H2>
      <MovieList movies={movies} />
    </section>
  );
};

export default Home;
