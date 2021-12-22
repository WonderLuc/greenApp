import React from 'react';
import { IPoint } from '../../Store/types';
import WorktimeList from '../WorktimeList/WorktimeList';

export default function PointWorktime({ point } : { point: IPoint }): JSX.Element {
  return (
    <article className="point-worktime">
      <h2 className="point-worktime__title">Время работы</h2>
      {point.worktime ? <WorktimeList worktime={point.worktime} /> : <p className="unknown">Неизвестно</p>}
    </article>
  );
}
