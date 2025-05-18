// Location search hook

import { useQuery } from '@apollo/client';
import { locationSearchQuery } from '../apollo/client';
import type { Location } from '../types';

export const useLocationSearch = (
  searchTerm: string
): { data: Location[]; loading: boolean; error: string | undefined } => {
  // Make query to search location by search term
  const { data, loading, error } = useQuery(locationSearchQuery, {
    variables: { searchTerm },
    skip: !searchTerm,
  });

  const errorMessage = error?.message && 'An error occurred while searching for location';

  if (data?.locationSearch?.length) {
    return { data: data.locationSearch, loading, error: errorMessage };
  }

  return { data: [], loading, error: errorMessage };
};
