// Selected location component

import { LocationIcon } from '../icons';
import { getLocationWithCountry } from '../helpers';
import type { Location } from '../types';

interface SelectedLocationProps {
  location: Location;
  onLocationSelected: (location: Location | null) => void;
}

export const SelectedLocation = ({ location, onLocationSelected }: SelectedLocationProps) => {
  return (
    <>
      <h2 className="text-lg font-bold inline">
        <LocationIcon />
        {getLocationWithCountry(location)}
      </h2>
      <button className="text-sm font-light ml-2 cursor-pointer" onClick={() => onLocationSelected(null)}>
        Clear
      </button>
    </>
  );
};
