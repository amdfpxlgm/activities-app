// Location input component

import type { ChangeEvent } from 'react';
import { LocationIcon } from '../../icons';

interface LocationInputProps {
  searchTerm: string;
  handleSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LocationInput = ({ searchTerm, handleSearchTermChange }: LocationInputProps) => {
  return (
    <>
      <label htmlFor="location-search" className="text-lg font-bold">
        <LocationIcon />
        Type a City or Town
      </label>
      <input
        className="border p-5 w-full xl:w-1/2 text-lg mt-5 block"
        id="location-search"
        type="search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </>
  );
};
