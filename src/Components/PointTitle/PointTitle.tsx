import React from 'react';
import { IPoint } from '../../Store/types';

export default function PointTitle({ point } : { point: IPoint }): JSX.Element {
  return (
    <article className="point-name">
      <h2 className="point-name__title">{point.name}</h2>
      <h3 className="point-name__adress">{point.address}</h3>
    </article>
  );
}
