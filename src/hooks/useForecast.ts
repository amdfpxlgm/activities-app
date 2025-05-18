// Forecast hook

import { useQuery } from '@apollo/client';
import { forecastQuery } from '../apollo/client';
import type { Forecast } from '../types';

export const useForecast = (
  latitude: number,
  longitude: number,
  timezone: string
): { data: Forecast | null; loading: boolean; error: string | undefined } => {
  // Make query to get weather forecast of location
  const { data, loading, error } = useQuery(forecastQuery, {
    variables: { latitude, longitude, timezone },
    skip: !latitude || !longitude || !timezone,
  });

  const errorMessage = error?.message && 'An error occurred while searching for weather forecast';

  if (data?.forecast) {
    return { data: data.forecast, loading, error: errorMessage };
  }

  return { data: null, loading, error: errorMessage };
};
