import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Maps = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "600px",
    height: "1000px",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 3.5,
  });

  return (
    <Map
      mapStyle="mapbox://styles/itaymiz98/clmt69ggc02g301qxbia19h0j"
      mapLib={import("mapbox-gl")}
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: viewport.longitude,
        latitude: viewport.latitude,
        zoom: viewport.zoom,
      }}
      style={{ width: viewport.width, height: viewport.height }}
      // style={{  maxHeight: 400 }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result, i) => (
        <>
          <div key={i}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              // offsetLeft={-20}
              // offsetTop={-10}
            >
              <p
                onClick={() => setSelectedLocation(result)}
                aria-label="push-pin"
                role="img"
                className="cursor-default animate-bounce text-2xl"
              >
                📍
              </p>
            </Marker>
          </div>
          {selectedLocation.long === result.long && (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          )}
        </>
      ))}
    </Map>
  );
};

export default Maps;
