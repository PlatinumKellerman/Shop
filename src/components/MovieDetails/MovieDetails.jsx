import {
  MainWrapper,
  Poster,
  MovieTitle,
  InfoValue,
  InfoWrapper,
  ParamsList,
  PropertiesList,
  InfoParams,
  Accent,
  HomepageLink,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const releaseYear = new Date(movie.release_date).getUTCFullYear();
  console.log();
  console.log(movie);
  return (
    <MainWrapper>
      <div>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></Poster>
      </div>

      <MovieTitle>
        {movie.title} ({releaseYear})
      </MovieTitle>

      <InfoWrapper>
        <ParamsList>
          <InfoParams>User Score:</InfoParams>
          <InfoParams>Rating:</InfoParams>
          <InfoParams>Genres:</InfoParams>
          <InfoParams>Budget:</InfoParams>
          <InfoParams>Movie hompage:</InfoParams>
          <InfoParams>Overview:</InfoParams>
        </ParamsList>

        <PropertiesList>
          <InfoValue>
            <Accent>{`${Number(movie.vote_average).toFixed(1) * 10}%`}</Accent>
          </InfoValue>
          <InfoValue>
            <Accent>{movie.vote_average}</Accent> ({movie.vote_count} votes)
          </InfoValue>
          <InfoValue>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(' | ')
              : 'There are no genres!'}
          </InfoValue>
          <InfoValue>${movie.budget}</InfoValue>
          <InfoValue>
            <HomepageLink
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Movie Homepage"
            >
              {movie.homepage}
            </HomepageLink>
          </InfoValue>
          <InfoValue>{movie.overview}</InfoValue>
        </PropertiesList>
      </InfoWrapper>
    </MainWrapper>
  );
};
