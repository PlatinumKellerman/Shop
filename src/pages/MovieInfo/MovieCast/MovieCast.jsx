import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCast } from '../../../services/fetchMovies';
import Loader from 'components/Loader';
import MovieCastList from 'components/MovieDetails/MovieCastList';
import { CastPlug } from './MovieCast.styled';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieCastResp = async () => {
      try {
        const response = await getMovieCast(movieId);
        setCast(response.cast);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieCastResp();
    setIsLoading(true);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <MovieCastList cast={cast} />
      ) : (
        <CastPlug>Sorry. We don't have any cast for this movie. </CastPlug>
      )}
    </div>
  );
};

export default MovieCast;
