import { GoBackLink } from './HomeLink.styled';

export const HomeLink = () => {
  return (
    <div>
      <GoBackLink to={'/movie-viewer'}>Home</GoBackLink>
    </div>
  );
};
