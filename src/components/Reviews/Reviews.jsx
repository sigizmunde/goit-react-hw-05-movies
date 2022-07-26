import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api-movies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState();

  useEffect(() => {
    console.log('movieId', movieId);
    if (movieId)
      fetchReviews({ movie_id: movieId })
        .then(response => {
          console.log(response);
          setReviewsData(response.data);
        })
        .catch(err => console.error(err));
  }, [movieId]);

  return (
    <ul>
      {reviewsData && reviewsData.results.length > 0 ? (
        reviewsData.results.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </ul>
  );
};

export default Reviews;
