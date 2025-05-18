// Common types

export type Location = {
  id: number;
  name: string;
  country: string | undefined;
  latitude: number;
  longitude: number;
  timezone: string;
};

export type Forecast = {
  latitude: number;
  longitude: number;
  timezone: string;
  daily_units: {
    time: string;
    temperature_2m_max: string;
    rain_sum: string;
    snowfall_sum: string;
    wind_speed_10m_max: string;
    cloud_cover_max: string;
    visibility_max: string;
    wave_height_max: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    rain_sum: number[];
    snowfall_sum: number[];
    wind_speed_10m_max: number[];
    cloud_cover_max: number[];
    visibility_max: number[];
    wave_height_max: number[];
  };
};

export type DayForecast = {
  time: string;
  temperature_2m_max: number;
  rain_sum: number;
  snowfall_sum: number;
  wind_speed_10m_max: number;
  cloud_cover_max: number;
  visibility_max: number;
  wave_height_max: number;
};

export type ActivityRank = {
  activity: string;
  score: number;
};
