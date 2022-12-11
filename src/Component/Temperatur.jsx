import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilSunset,
  UilWind,
  UilSun,
} from '@iconscout/react-unicons';
import { formatToLocalTime } from '../api/fetchWeaher';

const temperatur = ({ weather }) => {
  return (
    <div>
      <div className="flex items-center  justify-center py-6 text-4xl text-cyan-300 m">
        <p>{weather.description}</p>
      </div>

      <div className="flex flex-row  items-center justify-between  text-white py-3 max-sm:justify-start max-sm:relative">
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          className="max-sm:bottom-4  max-sm:absolute"
        />
        <p className="text-2xl ml-10 text-white max-sm:absolute max-sm:right-10 max-sm:bottom-11  ">
          {Math.round(weather.temp)}
          <sup className="text-sm">&deg;C</sup>
        </p>

        <div className="flex flex-col m space-y-1 max-sm:absolute max-sm:top-18 max-sm:left-5 max-sm:right-5 max-sm:mt-20 max-sm:m-auto ">
          <div className="flex font-light text-lg text-white items-center justify-center ">
            <UilTemperature size={18} className="mr-1 " />
            Real Feel:
            <span className="font-medium ml-1">
              {Math.round(weather.feels_like)} %
            </span>
          </div>
          <div className="flex font-light text-white text-lg items-center justify-center ">
            <UilTear size={18} className="mr-1" />
            Humadity:
            <span className="font-medium ml-1">
              {Math.round(weather.humidity)} %
            </span>
          </div>
          <div className="flex font-light text-xl text-white items-center justify-center ml-4 max-sm:mr-3">
            <UilWind size={18} className="mr-1" />
            Speed:
            <span className="font-medium ml-1">
              {Math.round(weather.speed)} KM/H
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-4 text-white text-sm py-3 max-sm:mt-20 ">
        <UilSun size={50} className="mr-1" />
        <div className="flex items-center justify-center text-lg text-white ">
          <h6 className=" ">Sunrise:</h6>
          <p className="font-medium mx-1">
            {formatToLocalTime(weather.sunrise, weather.timezone, 'hh:mm')}
          </p>
        </div>
        <p>|</p>
        <UilSunset size={50} className=" mx-1" />
        <div className="flex items-center justify-center text-lg text-white">
          <h6>Sunset: </h6>
          <p className="font-medium  mx-1">
            {formatToLocalTime(weather.sunset, weather.timezone, 'hh:mm')}{' '}
          </p>
        </div>
        <p>|</p>
        <UilArrowUp size={50} className=" mx-1" />
        <div className="flex items-center justify-center text-lg text-white">
          <h6>Hight:</h6>
          <p className="font-medium mx-1">{`${weather.temp_max.toFixed()}°`}</p>
        </div>
        <p>|</p>
        <UilArrowDown size={50} />
        <div className="flex items-center justify-center text-lg text-white">
          <h6>Low:</h6>
          <p className="font-medium ml-1">{`${weather.temp_min.toFixed()}°`}</p>
        </div>
      </div>
    </div>
  );
};

export default temperatur;
