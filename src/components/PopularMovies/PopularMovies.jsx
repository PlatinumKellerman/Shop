import { Link } from 'react-router-dom';
import Container from 'layout/common/Container/Container';

import {
  List,
  ImgWrapper,
  Poster,
  MovieTitle,
  ListItem,
  MovieYear,
} from './PopularMovies.styled';

const PopularMovies = ({ movies, location }) => {
  return (
    <Container>
      <List>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <ListItem key={id}>
            <Link to={`/movie-viewer/movies/${id}`} state={{ from: location }}>
              <ImgWrapper>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                ></Poster>
                <MovieTitle>{title}</MovieTitle>
                <MovieYear>
                  ({new Date(release_date).getUTCFullYear()})
                </MovieYear>
              </ImgWrapper>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
export default PopularMovies;
