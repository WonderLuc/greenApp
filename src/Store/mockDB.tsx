import { IPoint } from './types';

const points: IPoint[] = [
  {
    name: 'Пункт приема вторсырья',
    address: 'Маневровая 35',
    worktime: undefined,
    materials: ['Бумага'],
    longitude: 60.528349,
    latitude: 56.881689,
    id: 1,
  },
  {
    name: 'Пункт приема вторсырья',
    address: 'Маневровая 35',
    worktime: ['Пн 08:00 - 20:00', 'Вт 10:00 - 21:00'],
    materials: ['Бумага', 'Cтекло'],
    longitude: 60.6135816,
    latitude: 56.8412112,
    id: 2,
  },
];

export default points;
