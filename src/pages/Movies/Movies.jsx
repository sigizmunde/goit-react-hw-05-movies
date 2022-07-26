import MovieList from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api-movies';
import { Form } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim().toLowerCase();
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    console.log(query);
    if (query)
      searchMovies({ query }).then(response => {
        console.log(response);
        setMovies(response.data.results);
      });
  }, [searchParams]);

  return (
    <section>
      <Form onSubmit={handleSearch}>
        <input type="text" name="query" autoComplete="off" required></input>
        <button type="submit">Search</button>
      </Form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </section>
  );
};

export default Movies;
