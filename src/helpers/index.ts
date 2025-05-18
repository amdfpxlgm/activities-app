// Helper functions

import type { Location, Forecast, DayForecast, ActivityRank } from '../types';

export const getLocationWithCountry = (location: Location): string => {
  const { name, country = '' } = location;

  if (country) {
    return `${name}, ${country}`;
  }

  return name;
};

export const mergeForecastDataPerDay = (forecast: Forecast): DayForecast[] => {
  const {
    time: weekDates,
    temperature_2m_max,
    rain_sum,
    snowfall_sum,
    wind_speed_10m_max,
    cloud_cover_max,
    visibility_max,
    wave_height_max,
  } = forecast.daily;

  return weekDates.map((time: string, index: number) => {
    return {
      time,
      temperature_2m_max: temperature_2m_max[index],
      rain_sum: rain_sum[index],
      snowfall_sum: snowfall_sum[index],
      wind_speed_10m_max: wind_speed_10m_max[index],
      cloud_cover_max: cloud_cover_max[index],
      visibility_max: visibility_max[index],
      wave_height_max: wave_height_max[index],
    };
  });
};

export const rankDayActivities = (dayForecast: DayForecast): ActivityRank[] => {
  const {
    cloud_cover_max,
    rain_sum,
    snowfall_sum,
    temperature_2m_max,
    visibility_max,
    wave_height_max,
    wind_speed_10m_max,
  } = dayForecast;

  const scores: Record<string, number> = {
    surfing: 0,
    skiing: 0,
    outdoor_sightseeing: 0,
    indoor_sightseeing: 0,
  };

  // Surfing (best with high waves, moderate wind, no rain)
  if (wave_height_max >= 1) scores.surfing += 40;
  if (wind_speed_10m_max >= 10 && wind_speed_10m_max <= 30) scores.surfing += 20;
  if (rain_sum === 0) scores.surfing += 20;
  if (visibility_max > 5000) scores.surfing += 20;

  // Skiing (needs snow, cold temp, clear visibility)
  if (snowfall_sum >= 5) scores.skiing += 40;
  if (temperature_2m_max <= 0) scores.skiing += 20;
  if (visibility_max > 3000) scores.skiing += 20;
  if (rain_sum === 0) scores.skiing += 20;

  // Outdoor sightseeing (needs dry, clear, warm conditions)
  if (rain_sum === 0) scores.outdoor_sightseeing += 30;
  if (cloud_cover_max <= 50) scores.outdoor_sightseeing += 20;
  if (visibility_max > 5000) scores.outdoor_sightseeing += 30;
  if (temperature_2m_max >= 10 && temperature_2m_max <= 25) scores.outdoor_sightseeing += 20;

  // Indoor sightseeing (better when bad outside)
  if (rain_sum > 5) scores.indoor_sightseeing += 40;
  if (snowfall_sum > 0) scores.indoor_sightseeing += 20;
  if (cloud_cover_max > 70) scores.indoor_sightseeing += 20;
  if (temperature_2m_max < 5 || temperature_2m_max > 30) scores.indoor_sightseeing += 20;

  const sortedActivityRanks = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]) // sort by score descending
    .map(([activity, score]) => ({ activity, score }));

  return sortedActivityRanks;
};
