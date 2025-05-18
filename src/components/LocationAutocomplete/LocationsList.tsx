// Locations list component

import type { Location } from '../../types';
import { getLocationWithCountry } from '../../helpers';

interface LocationsListProps {
  locations: Location[];
  handleLocationSelection: (location: Location) => void;
}

export const LocationsList = ({ locations, handleLocationSelection }: LocationsListProps) => {
  return (
    <ul className="absolute w-full xl:w-1/2 text-lg bg-white border max-h-[300px] overflow-y-scroll">
      {locations.map((location: Location) => {
        return (
          <li key={location.id} className="p-5 not-last:border-b" onClick={() => handleLocationSelection(location)}>
            <div className="cursor-pointer">{getLocationWithCountry(location)}</div>
          </li>
        );
      })}
    </ul>
  );
};
