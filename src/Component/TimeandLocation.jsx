import React from 'react';
import { formatToLocalTime } from '../api/fetchWeaher';

const TimeandLocation = ({ weather }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-2 ">
        <p className="text-white text-xl font-extralight  max-sm:text-[12px] ">
          {formatToLocalTime(weather.dt, weather.timezone)}
        </p>
      </div>

      <div className="flex items-center  justify-center py-6 text=xl text-cyan-300">
        <div className="flex items-center  justify-center my-2 ">
          <p className="text-white text-3xl font-medium">{`${weather.name}, ${weather.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeandLocation;
