// Apollo client queries

import { gql } from '@apollo/client';

// Query to search location by search term
export const locationSearchQuery = gql`
  query locationSearch($searchTerm: String!) {
    locationSearch(searchTerm: $searchTerm) {
      id
      name
      country
      latitude
      longitude
      timezone
    }
  }
`;

// Query to get weather forecast of location
export const forecastQuery = gql`
  query forecast($latitude: Float!, $longitude: Float!, $timezone: String!) {
    forecast(latitude: $latitude, longitude: $longitude, timezone: $timezone) {
      latitude
      longitude
      timezone
      daily_units {
        time
        temperature_2m_max
        rain_sum
        snowfall_sum
        wind_speed_10m_max
        cloud_cover_max
        visibility_max
        wave_height_max
      }
      daily {
        time
        temperature_2m_max
        rain_sum
        snowfall_sum
        wind_speed_10m_max
        cloud_cover_max
        visibility_max
        wave_height_max
      }
    }
  }
`;
