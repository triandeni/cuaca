import { useState } from 'react';
import { getFormatWeatherData } from './api/fetchWeaher';

import TimeandLocation from './Component/TimeandLocation';
import Temperatur from './Component/Temperatur';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await getFormatWeatherData(query);
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className=" mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br opacity-100 z-10 h-fitrounded-lg ">
      <div className="flex justify-center">
        <div className="flex flex-col  my-6 w-3/4 items-center justify-center space-x-4 ">
          <input
            type="text"
            className=" p-2 border w-52  first-letter:uppercase rounded-xl mb-8  lg:py-3 sm:px-2"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
      </div>
      {weather && (
        <div>
          <TimeandLocation weather={weather} />
          <Temperatur weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
