// Forecast component

import type { Location, DayForecast } from '../../types';
import { useForecast } from '../../hooks';
import { Loader } from '../Loader';
import { Alert } from '../Alert';
import { mergeForecastDataPerDay } from '../../helpers';
import { ActivityRanking } from './ActivityRanking';

interface ForecastProps {
  location: Location;
}

export const Forecast = ({ location }: ForecastProps) => {
  const { latitude, longitude, timezone } = location;

  // Get weather forecast for 7 days based on location
  const { data: forecast, loading, error } = useForecast(latitude, longitude, timezone);

  if (loading) {
    return <Loader show={loading} />;
  }

  if (error || !forecast) {
    return <Alert type="error" text={error} />;
  }

  // Merge all forecast parameters for each day in a list
  const forecastDataPerDay = mergeForecastDataPerDay(forecast);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
      {forecastDataPerDay.map((dayForecast: DayForecast) => {
        return <ActivityRanking key={dayForecast.time} dayForecast={dayForecast} />;
      })}
    </div>
  );
};
