import { IPoint } from './types';

const points: IPoint[] = [
  {
    name: 'ЭКОТРАНС',
    address: 'ул.Маневровая 35',
    worktime: undefined,
    materials: ['Бумага'],
    longitude: 60.528349,
    latitude: 56.881689,
    id: 1,
  },
  {
    name: 'ЛЕРУА МЕРЛЕН',
    address: 'ул.Металлургов 74',
    worktime: ['Пн 07:00 - 23:00', 'Вт 7:00 - 23:00', 'Cр 7:00 - 23:00',
      'Чт 7:00 - 23:00', 'Пт 7:00 - 23:00', 'Сб 7:00 - 23:00', 'Вс 7:00 - 23:00'],
    materials: ['Лампочки', 'Батарейки'],
    longitude: 60.516132,
    latitude: 56.829157,
    id: 2,
  },
  {
    name: 'СБВ УТИЛИЗАЦИЯ',
    address: 'ул.Большой Конный п-ов 5А',
    worktime: undefined,
    materials: ['Бытовая техника', 'Лампочки', 'Батарейки', 'Опасные отходы', 'Бумага'],
    longitude: 60.501507,
    latitude: 56.847695,
    id: 3,
  },
  {
    name: 'MEGA И #НЕМУЗЕЙМУСОРА',
    address: 'ул.Металлургов 87',
    worktime: undefined,
    materials: ['Одежда', 'Металл', 'Пластик', 'Стекло', 'Бумага'],
    longitude: 60.505406,
    latitude: 56.823636,
    id: 4,
  },
  {
    name: 'М.ВИДЕО',
    address: 'ул.Репина 94',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.538536,
    latitude: 56.817183,
    id: 5,
  },
  {
    name: 'ФИНТЕХКОМПЛЕКТ',
    address: 'ул.Крауля 63',
    worktime: ['Пн 09:00 - 17:00', 'Вт 09:00 - 17:00', 'Cр 09:00 - 17:00',
      'Чт 09:00 - 17:00', 'Пт 09:00 - 17:00', 'Сб 09:00 - 17:00', 'Вс 09:00 - 17:00'],
    materials: ['Бумага'],
    longitude: 60.548085,
    latitude: 56.830374,
    id: 6,
  },
  {
    name: 'САЛОН СВЯЗИ TELE2',
    address: 'ул.Викулова 39/4',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 21:00'],
    materials: ['Телефоны'],
    longitude: 60.545255,
    latitude: 56.829970,
    id: 7,
  },
  {
    name: 'СБВ УТИЛИЗАЦИЯ',
    address: 'ул.Викулова 32а',
    worktime: ['Пн 09:00 - 19:00', 'Вт 09:00 - 19:00', 'Cр 09:00 - 19:00',
      'Чт 09:00 - 19:00', 'Пт 09:00 - 19:00', 'Сб 10:00 - 15:00', 'Вс нерабочий'],
    materials: ['Бытовая техника', 'Лампочки', 'Батарейки', 'Опасные отходы', 'Бумага', 'Шины'],
    longitude: 60.544339,
    latitude: 56.833457,
    id: 8,
  },
  {
    name: 'СБВ УТИЛИЗАЦИЯ',
    address: 'ул.Крауля 51',
    worktime: ['Пн 09:00 - 19:00', 'Вт 09:00 - 19:00', 'Cр 09:00 - 19:00',
      'Чт 09:00 - 19:00', 'Пт 09:00 - 19:00', 'Сб 10:00 - 15:00', 'Вс нерабочий'],
    materials: ['Бытовая техника', 'Лампочки', 'Батарейки', 'Опасные отходы', 'Бумага'],
    longitude: 60.559808,
    latitude: 56.829783,
    id: 9,
  },
  {
    name: 'ВЕЩЬ ДОБРА',
    address: 'ул.Татищева 90',
    worktime: undefined,
    materials: ['Одежда'],
    longitude: 60.546019,
    latitude: 56.836593,
    id: 10,
  },
  {
    name: 'ЦЕНТР ГУМАНИТАРНОЙ ПОМОЩИ',
    address: 'ул.Кирова 65',
    worktime: ['Пн 07:00 - 20:00', 'Вт 7:00 - 20:00', 'Cр 7:00 - 20:00',
      'Чт 7:00 - 20:00', 'Пт 7:00 - 20:00', 'Сб 7:00 - 20:00', 'Вс 7:00 - 20:00'],
    materials: ['Одежда'],
    longitude: 60.556269,
    latitude: 56.839139,
    id: 11,
  },
  {
    name: 'ЦЕНТР СОЦИАЛЬНОГО ОБСЛУЖИВАНИЯ НАСЕЛЕНИЯ',
    address: 'ул.Татищева 62',
    worktime: ['Пн 08:30 - 17:30', 'Вт 8:30 - 17:30', 'Cр 8:30 - 17:30',
      'Чт 8:30 - 17:30', 'Пт 8:30 - 16:00', 'Сб нерабочий', 'Вс нерабочий'],
    materials: ['Одежда'],
    longitude: 60.556907,
    latitude: 56.836229,
    id: 12,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Крауля 8',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Батарейки'],
    longitude: 60.565467,
    latitude: 56.830049,
    id: 13,
  },
  {
    name: 'FRESHBURG',
    address: 'ул.Мельникова 40',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Батарейки'],
    longitude: 60.566995,
    latitude: 56.830960,
    id: 14,
  },
  {
    name: 'МАГАЗИН "НОРД"',
    address: 'ул.Начдива Васильева 3А',
    worktime: ['Пн 10:00 - 20:00', 'Вт 10:00 - 20:00', 'Cр 10:00 - 20:00',
      'Чт 10:00 - 20:00', 'Пт 10:00 - 20:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 20:00'],
    materials: ['Батарейки'],
    longitude: 60.555137,
    latitude: 56.819666,
    id: 15,
  },
  {
    name: 'КОНТЕЙНЕР ДЛЯ УТИЛИЗАЦИИ СТЕКЛА',
    address: 'ул.Академика Сахарова 93',
    worktime: ['Пн 10:00 - 23:00', 'Вт 10:00 - 23:00', 'Cр 10:00 - 23:00',
      'Чт 10:00 - 23:00', 'Пт 10:00 - 23:00', 'Сб 10:00 - 23:00', 'Вс 10:00 - 23:00'],
    materials: ['Стекло'],
    longitude: 60.504274,
    latitude: 56.790792,
    id: 16,
  },
  {
    name: 'ЭЛЕКТРОТЕХМОНТАЖ',
    address: 'ул.Вильгельма де Геннина 49',
    worktime: ['Пн 09:00 - 17:00', 'Вт 09:00 - 17:00', 'Cр 09:00 - 17:00',
      'Чт 09:00 - 17:00', 'Пт 09:00 - 17:00', 'Сб 09:00 - 17:00', 'Вс нерабочий'],
    materials: ['Батарейки'],
    longitude: 60.513500,
    latitude: 56.787992,
    id: 17,
  },
  {
    name: 'КОНТЕЙНЕР ДЛЯ УТИЛИЗАЦИИ СТЕКЛА',
    address: 'пр-т.Ленина 5',
    worktime: ['Пн 10:00 - 23:00', 'Вт 10:00 - 23:00', 'Cр 10:00 - 23:00',
      'Чт 10:00 - 23:00', 'Пт 10:00 - 23:00', 'Сб 10:00 - 23:00', 'Вс 10:00 - 23:00'],
    materials: ['Стекло'],
    longitude: 60.582221,
    latitude: 56.836672,
    id: 18,
  },
  {
    name: 'М.ВИДЕО',
    address: 'ул.Малышева 5',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.582374,
    latitude: 56.832969,
    id: 19,
  },
  {
    name: 'ФИНТЕХКОМПЛЕКТ',
    address: 'ул.Московская 50',
    worktime: ['Пн 09:00 - 17:00', 'Вт 09:00 - 17:00', 'Cр 09:00 - 17:00',
      'Чт 09:00 - 17:00', 'Пт 09:00 - 17:00', 'Сб 09:00 - 17:00', 'Вс 09:00 - 17:00'],
    materials: ['Бумага'],
    longitude: 60.585123,
    latitude: 56.825922,
    id: 20,
  },
  {
    name: 'ВЕЩЬ ДОБРА',
    address: 'ул.Шейнкмана 90',
    worktime: undefined,
    materials: ['Одежда'],
    longitude: 60.588204,
    latitude: 56.826193,
    id: 21,
  },
  {
    name: 'УРАЛВТОРМА',
    address: 'ул.Пальмиро Тольятти 15А',
    worktime: ['Пн нерабочий', 'Вт 11:00 - 16:00', 'Cр 11:00 - 16:00',
      'Чт 11:00 - 16:00', 'Пт нерабочий', 'Сб 11:00 - 16:00', 'Вс нерабочий'],
    materials: ['Бумага'],
    longitude: 60.581493,
    latitude: 56.821272,
    id: 22,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'пр-т.Ленина 24/8',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Батарейки'],
    longitude: 60.593612,
    latitude: 56.836938,
    id: 23,
  },
  {
    name: 'МАГАЗИН "RENDEZ-VOUS"',
    address: 'ул.Вайнера 9',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Одежда'],
    longitude: 60.595804,
    latitude: 56.836396,
    id: 24,
  },
  {
    name: '#НЕМУЗЕЙМУСОРА',
    address: 'ул.Антона Валека 12',
    worktime: ['Пн 10:00 - 20:00', 'Вт 10:00 - 20:00', 'Cр 10:00 - 20:00',
      'Чт 10:00 - 20:00', 'Пт 10:00 - 20:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 20:00'],
    materials: ['Тетра Пак', 'Бытовая техника', 'Одежда', 'Металл', 'Пластик', 'Стекло', 'Бумага'],
    longitude: 60.593243,
    latitude: 56.840183,
    id: 25,
  },
  {
    name: 'ВЕЩЬ ДОБРА',
    address: 'ул.Розы Люксембург 8/10',
    worktime: undefined,
    materials: ['Одежда'],
    longitude: 60.611794,
    latitude: 56.834496,
    id: 26,
  },
  {
    name: 'ПРЕДПРИЯТИЕ КОМПЛЕКСНОГО РЕШЕНИЯ ПРОБЛЕМ ПРОМЫШЛЕННЫХ ОТХОДОВ',
    address: 'ул.Энгельса 16',
    worktime: undefined,
    materials: ['Лампочки', 'Батарейки', 'Опасные отходы'],
    longitude: 60.613159,
    latitude: 56.832969,
    id: 27,
  },
];

export default points;
