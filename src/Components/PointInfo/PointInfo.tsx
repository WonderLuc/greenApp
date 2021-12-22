import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  NavLink, Redirect, useParams,
} from 'react-router-dom';
import { setDownloadActivity } from '../../Store/Actions';
import { IState } from '../../Store/types';
import PointMaterials from '../PointMaterials/PointMaterials';
import PointTestimonials from '../PointTestimonials/PointTestimonials';
import PointTitle from '../PointTitle/PointTitle';
import PointWorktime from '../PointWorktime/PointWorktime';
import './style.scss';

export default function PointInfo(): JSX.Element {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const point = useSelector((state: IState) => state.pointsState.points.find((p) => p.id === +id));

  useEffect(() => {
    dispatch(setDownloadActivity(false));
  });

  return (
    point
      ? (
        <main className="point">
          <PointTitle point={point} />
          <NavLink to="/" className="nav-link">
            <p className="nav-link_back">
              <i className="arrow arrow_left" />
              Карта
            </p>
          </NavLink>
          <PointWorktime point={point} />
          <PointMaterials point={point} />
          <PointTestimonials />
        </main>
      )
      : <Redirect to="/" />
  );
}
