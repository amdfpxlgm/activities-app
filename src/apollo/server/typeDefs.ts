// Apollo server schema

import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    country: String
    latitude: Float!
    longitude: Float!
    timezone: String!
  }

  type Query {
    locationSearch(searchTerm: String!): [Location]
  }

  type DailyUnits {
    time: String!
    temperature_2m_max: String!
    rain_sum: String!
    snowfall_sum: String!
    wind_speed_10m_max: String!
    cloud_cover_max: String!
    visibility_max: String!
    wave_height_max: String!
  }

  type Daily {
    time: [String]!
    temperature_2m_max: [Float]!
    rain_sum: [Float]!
    snowfall_sum: [Float]!
    wind_speed_10m_max: [Float]!
    cloud_cover_max: [Int]!
    visibility_max: [Int]!
    wave_height_max: [Float]!
  }

  type Forecast {
    latitude: Float!
    longitude: Float!
    timezone: String!
    daily_units: DailyUnits!
    daily: Daily!
  }

  type Query {
    forecast(latitude: Float!, longitude: Float!, timezone: String!): Forecast
  }
`;
