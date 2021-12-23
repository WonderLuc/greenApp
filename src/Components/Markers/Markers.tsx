import L from 'leaflet';
import React from 'react';
import { Marker } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setDownloadActivity } from '../../Store/Actions';
import { IPoint, IState } from '../../Store/types';

const customIcon = L.icon({
  iconUrl: './public/Marker.svg',
  iconRetinaUrl: './Marker.svg',
  iconAnchor: [12, 52],
  popupAnchor: undefined,
  iconSize: [32, 64],
});

export default function Markers(): JSX.Element {
  const points = useSelector((state: IState) => state.pointsState.points);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      {
        points.map((point: IPoint) => (
          <Marker
            position={[point.latitude, point.longitude]}
            key={point.id}
            data-id={point.id}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                dispatch(setDownloadActivity(true));
                history.push(`/element/${point.id}`);
              },
            }}
          />
        ))
      }
    </>
  );
}
