// Apollo server resolvers

import type { Location, Forecast } from '../../types';
import { OPEN_METEO_API } from '../../constants';

export const resolvers = {
  Query: {
    // Query to search location by search term
    locationSearch: async (_: unknown, { searchTerm }: { searchTerm: string }): Promise<Location[]> => {
      // Get geo data from open meteo API
      const geocodingApiEndpoint = OPEN_METEO_API.GEOCODING(searchTerm);
      const locationSearchResponse = await fetch(geocodingApiEndpoint);
      const { results } = await locationSearchResponse.json();

      if (!results) {
        return [];
      }

      return results.map(({ id, name, country, latitude, longitude, timezone }: Location) => {
        return { id, name, country, latitude, longitude, timezone };
      });
    },
    // Query to get weather forecast of location
    forecast: async (
      _: unknown,
      { latitude, longitude, timezone }: { latitude: number; longitude: number; timezone: string }
    ): Promise<Forecast | null> => {
      // Get weather forecast data from open meteo API
      const weatherForecastApiEndpoint = OPEN_METEO_API.WEATHER_FORECAST(latitude, longitude, timezone);
      const weatherForecastResponse = await fetch(weatherForecastApiEndpoint);
      const weatherForecastData = await weatherForecastResponse.json();

      // Get marine forecast data from open meteo API
      const marineForecastApiEndpoint = OPEN_METEO_API.MARINE_FORECAST(latitude, longitude);
      const marineForecastResponse = await fetch(marineForecastApiEndpoint);
      const marineForecastData = await marineForecastResponse.json();

      const { latitude: lat, longitude: long, daily_units, daily } = weatherForecastData;
      const {
        daily_units: { wave_height_max },
        daily: marineForecastDaily,
      } = marineForecastData;

      // Combine weather and maine forecast
      return {
        latitude: lat,
        longitude: long,
        timezone,
        daily_units: { ...daily_units, wave_height_max },
        daily: {
          ...daily,
          wave_height_max: marineForecastDaily.wave_height_max,
        },
      };
    },
  },
};
