// Client app component

import { useState } from 'react';
import { Header, LocationAutocomplete, SelectedLocation, Forecast } from './components';
import type { Location } from './types';

export const App = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Location selection handler
  const onLocationSelected = (location: Location | null) => {
    setSelectedLocation(location);
  };

  return (
    <div className="w-[90%] lg:w-3/4 my-10 mx-auto p-10 bg-white border">
      <Header />
      {!selectedLocation && <LocationAutocomplete onLocationSelected={onLocationSelected} />}
      {selectedLocation && (
        <>
          <SelectedLocation location={selectedLocation} onLocationSelected={onLocationSelected} />
          <Forecast location={selectedLocation} />
        </>
      )}
    </div>
  );
};
