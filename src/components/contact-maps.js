import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapWithAMarker = withGoogleMap(props => (
  <GoogleMap defaultZoom={11} defaultCenter={{ lat: 22.28, lng: 114.15 }}>
    <Marker position={{ lat: 22.28, lng: 114.152 }} />
  </GoogleMap>
));

export default MapWithAMarker;
