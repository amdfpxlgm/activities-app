// App constants

export const API_ENDPOINT = 'http://localhost:4000/';
export const OPEN_METEO_API = {
  GEOCODING: (searchTerm: string) =>
    `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=en&format=json`,
  WEATHER_FORECAST: (latitude: number, longitude: number, timezone: string) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,rain_sum,snowfall_sum,wind_speed_10m_max,cloud_cover_max,visibility_max&timezone=${timezone}`,
  MARINE_FORECAST: (latitude: number, longitude: number) =>
    `https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&daily=wave_height_max`,
};
