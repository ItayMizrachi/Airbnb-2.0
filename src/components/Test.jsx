import { useState } from "react";
import Map from "react-map-gl";

const Test = () => {
  return (
    <>
      <Map
        mapStyle="mapbox://styles/itaymiz98/clmt69ggc02g301qxbia19h0j"
        mapboxAccessToken="pk.eyJ1IjoiaXRheW1pejk4IiwiYSI6ImNsbXQ2MTZuaTAyN28yanBlcXhqdG85ZzEifQ.9m2ipPtFzr6zgrvfIlvjBg"
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
      ></Map>
    </>
  );
};

export default Test;
