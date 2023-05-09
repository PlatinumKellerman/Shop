import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getWeatherByCityName,
  getForecastWeather,
} from '../../services/fetchWeather';
import SearchCityWeatherForm from 'components/SearchCityWeatherForm';
import FoundCityWeather from 'components/FoundCityWeather';
import { BackLink, StyledContainer } from './WeatherPage.styled';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie-viewer';
  const [searchParams, setSearchParams] = useSearchParams();
  const cityName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (cityName === '' || cityName === null) return;
    async function getCityWeather() {
      try {
        const response = await getWeatherByCityName(cityName);
        const response2 = await getForecastWeather(cityName);
        setWeather(response);
        setForecast(response2);
      } catch (error) {
        if (error.response.status === 404) {
          toast.error('This city name was not found');
        } else {
          toast.error('Oops! Something went wrong!');
        }
      }
    }
    if (cityName) {
      getCityWeather();
    }
  }, [cityName]);

  const handleCityNameSubmit = cityName => {
    if (cityName) {
      setSearchParams(cityName);
    }
  };

  return (
    <StyledContainer>
      <BackLink to={backLinkHref}>
        {'<-'} {''} Go Back
      </BackLink>
      <SearchCityWeatherForm onSubmit={handleCityNameSubmit} />
      {weather && (
        <FoundCityWeather
          weather={weather}
          forecast={forecast}
          location={location}
        />
      )}
    </StyledContainer>
  );
};

export default WeatherPage;
