import axios from 'axios';
import { DateTime } from 'luxon';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API = '8de2e03b9c320a23fec80257a4c9c2ba';
const fetchWeaher = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API,
    },
  });
  return data;
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

export const getFormatWeatherData = async (searchParams) => {
  const formatedCurrentWeather = await fetchWeaher(searchParams).then(
    formatCurrentWeather
  );

  return { ...formatedCurrentWeather };
};

export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default fetchWeaher;
