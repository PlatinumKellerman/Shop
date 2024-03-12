import styled, { keyframes } from 'styled-components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReactComponent as ImdbLogoMin } from '../../assets/imdb-logo-min.svg';
import { ReactComponent as YouTubeLogoMin } from '../../assets/youtube-logo.svg';

export const MainWrapper = styled.div`
  padding: 15px 10px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    padding: 20px 40px;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-right: 30px;
  }
`;

export const Poster = styled.img`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    min-width: 300px;
    max-width: 500px;
  }
`;

export const ProdLogoWrapper = styled.div`
  padding: 5px;
  background-color: ${p => p.theme.colors.grey};
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
`;

export const ProdLogo = styled.img`
  max-width: 80px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
`;

export const MovieTitle = styled.h3`
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.light};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.primary};
    transform: scale(1.01);
    cursor: pointer;
    transition-duration: 500ms;
    transition-property: all;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const YouTubeLogo = styled(YouTubeLogoMin)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 150px;
  height: auto;
  color: ${p => p.theme.colors.dark};
  stroke: ${p => p.theme.colors.light};
  &:hover,
  &:focus,
  &:active {
    animation: ${pulse} 2s infinite;
    cursor: pointer;
    transition-duration: 500ms;
    transition-property: all;
  }
  @media (max-width: ${p => p.theme.breakpoints.values.lg}px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImdbLogo = styled(ImdbLogoMin)`
  margin: 10px 0px;
  width: 100px;
  padding: 5px;
  height: auto;
  color: ${p => p.theme.colors.imdb};
  border: 1px solid ${p => p.theme.colors.imdb};
  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${p => p.theme.colors.accent};
    cursor: pointer;
    transition-duration: 500ms;
    transition-property: all;
    color: ${p => p.theme.colors.accent};
  }
`;

export const Tagline = styled.h4`
  margin-bottom: 20px;
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.grey};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const InfoWrapper = styled.div`
  padding: 10px;
  background-color: ${p => p.theme.colors.dark};
  border-radius: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    padding: 25px;
    width: 75%;
    height: 75%;
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  white-space: wrap;
`;

export const InfoParams = styled.p`
  margin-bottom: 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.primary};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const InfoValue = styled.p`
  letter-spacing: 2px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.light};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const CastList = styled.ul`
  display: inline;
`;

export const CastItem = styled.li``;

export const CastNameButton = styled.button`
  border: none;
  letter-spacing: 2px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.dark};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.accent};
    transition-duration: 200ms;
    transition-property: all;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Accent = styled.span`
  padding: 2px 5px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: 5px;
`;

export const NotFindValue = styled.span`
  margin-bottom: 20px;
`;

export const PosterPlug = styled.img`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    min-width: 300px;
    max-width: 500px;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalButton = styled(Button)`
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.accent};
    transition-duration: 200ms;
    transition-property: all;
  }
`;

export const ModalBox = styled(Box)`
  scale: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${p => p.theme.colors.darkGrey};
  border: 2px solid #000;
  box-shadow: 24px;
  width: 400px;
  height: auto;
  padding: 10px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 600px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.xl}px) {
    width: 1000px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.xxl}px) {
    width: 1400px;
    height: 100%;
  }
`;

export const ModalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ModalItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BackdropImg = styled.img`
  width: 100%;
  padding: 5px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 100%;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.xl}px) {
    width: 100%;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.xxl}px) {
    width: 100%;
  }
`;
