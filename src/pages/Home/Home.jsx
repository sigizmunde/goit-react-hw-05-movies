import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/api-movies';
import { H2, TrendingList } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(response => setMovies(response.data.results));
  }, []);

  return (
    <section>
      <H2>Trending today</H2>
      <TrendingList>
        {movies.length > 0 &&
          movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
      </TrendingList>
    </section>
  );
};

export default Home;
