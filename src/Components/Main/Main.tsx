import { Map } from 'leaflet';
import React, { useEffect, useState } from 'react';
import {
  MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Main(): JSX.Element {
  const [geoData, setGeoData] = useState<GeolocationPosition>();
  const [map, setMap] = useState<Map>();
  const callbackGeo = (o: GeolocationPosition) => {
    setGeoData(o);
  };
  useEffect(() => navigator.geolocation.getCurrentPosition(callbackGeo), []);

  return (
    <main>
      <h1>MAIN!</h1>
      <NavLink to="/element" className="nav-link" activeClassName="nav-link_active">Go to Point Info</NavLink>
      <MapContainer
        center={[56.8412112, 60.6135816]}
        whenCreated={(cmap) => {
          setMap(cmap); cmap.flyTo([geoData?.coords.latitude ? geoData?.coords.latitude : 56.8412112,
            geoData?.coords.longitude ? geoData?.coords.longitude : 60.6135816]);
        }}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </main>
  );
}
