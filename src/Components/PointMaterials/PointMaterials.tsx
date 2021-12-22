import React from 'react';
import { IPoint } from '../../Store/types';

export default function PointMaterials({ point } : { point: IPoint }): JSX.Element {
  return (
    <article className="materials">
      <h2 className="materials__title">Принимаемые материалы:</h2>
      <ul className="materials-list">
        {
          point.materials.map((material) => <li className="materials-list__item" key={material}>{material}</li>)
        }
      </ul>
    </article>
  );
}
