import { Map } from 'leaflet';
import React, { useEffect, useState } from 'react';
import {
  MapContainer, Marker, TileLayer,
} from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { setDownloadActivity } from '../../Store/Actions';
import Markers from '../Markers/Markers';
import './style.scss';

export default function Main(): JSX.Element {
  const [geoData, setGeoData] = useState<GeolocationPosition>();
  const [map, setMap] = useState<Map>();
  const dispatch = useDispatch();
  const callbackGeo = (o: GeolocationPosition) => {
    setGeoData(o);
  };
  useEffect(() => {
    dispatch(setDownloadActivity(true));
    navigator.geolocation.getCurrentPosition(callbackGeo);
  }, []);

  return (
    <main>
      <div className="main-zone">
        <div className="map">
          <MapContainer
            center={[56.8412112, 60.6135816]}
            whenCreated={(cmap) => {
              setMap(cmap);
              cmap.flyTo([geoData?.coords.latitude ? geoData?.coords.latitude : 56.8412112,
                geoData?.coords.longitude ? geoData?.coords.longitude : 60.6135816]);
              dispatch(setDownloadActivity(false));
            }}
            zoom={12}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers />
          </MapContainer>
        </div>
      </div>
    </main>
  );
}
