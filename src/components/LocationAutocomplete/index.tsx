// Location autocomplete component

import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useDebounce, useLocationSearch } from '../../hooks';
import { Loader } from '../Loader';
import { Alert } from '../Alert';
import type { Location } from '../../types';
import { LocationInput } from './LocationInput';
import { LocationsList } from './LocationsList';

interface LocationAutocompleteProps {
  onLocationSelected: (location: Location) => void;
}

export const LocationAutocomplete = ({ onLocationSelected }: LocationAutocompleteProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Debounce search term typing
  const debouncedSearchTerm = useDebounce<string>(searchTerm);

  // Get list of locations based on search term
  const { data: locations, loading, error } = useLocationSearch(debouncedSearchTerm);

  // Search term change handler
  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Location selection handler
  const handleLocationSelection = (location: Location) => {
    onLocationSelected(location);
  };

  return (
    <div className="relative">
      <LocationInput searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <Loader show={loading} />
      <Alert type="error" text={error} />
      {locations.length > 0 && (
        <LocationsList locations={locations} handleLocationSelection={handleLocationSelection} />
      )}
    </div>
  );
};
