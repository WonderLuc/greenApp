import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../Store/types';
import './style.scss';

export default function Loader(): JSX.Element {
  const isLoading = useSelector((state: IState) => state.download.isActive);

  return (
    <article className={`loader ${isLoading ? 'loader_open' : ''}`}>
      <p>Loading</p>
    </article>
  );
}
