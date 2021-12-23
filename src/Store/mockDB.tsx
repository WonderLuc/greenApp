import { IPoint } from './types';

const points: IPoint[] = [
  {
    name: 'ЭКОТРАНС',
    address: 'ул.Маневровая 35',
    worktime: undefined,
    materials: ['Металл', 'Пластик', 'Бумага'],
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
  {
    name: 'ШУРУМ-БУРУМ',
    address: 'ул.Белинского 66',
    worktime: undefined,
    materials: ['Одежда', 'Бумага', 'Иное'],
    longitude: 60.615800,
    latitude: 56.829773,
    id: 28,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Карла Либкнехта 2',
    worktime: ['Пн 10:00 - 23:00', 'Вт 10:00 - 23:00', 'Cр 10:00 - 23:00',
      'Чт 10:00 - 23:00', 'Пт 10:00 - 23:00', 'Сб 10:00 - 23:00', 'Вс 10:00 - 23:00'],
    materials: ['Батарейки'],
    longitude: 60.612925,
    latitude: 56.836145,
    id: 29,
  },
  {
    name: 'ЭЛЕКТРОТЕХМОНТАЖ',
    address: 'ул.Тверитина 46',
    worktime: ['Пн 09:00 - 17:00', 'Вт 09:00 - 17:00', 'Cр 09:00 - 17:00',
      'Чт 09:00 - 17:00', 'Пт 09:00 - 17:00', 'Сб 09:00 - 17:00', 'Вс нерабочий'],
    materials: ['Батарейки'],
    longitude: 60.620103,
    latitude: 56.821868,
    id: 30,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'ул.Малышева 122',
    worktime: ['Пн 10:00 - 20:00', 'Вт 10:00 - 20:00', 'Cр 10:00 - 20:00',
      'Чт 10:00 - 20:00', 'Пт 10:00 - 20:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 20:00'],
    materials: ['Лампочки', 'Батарейки', 'Опасные отходы'],
    longitude: 60.636812,
    latitude: 56.838120,
    id: 31,
  },
  {
    name: 'АККУМУЛЯТОРНЫЙ МИР',
    address: 'ул.Куйбышева 12',
    worktime: ['Пн 08:00 - 21:00', 'Вт 08:00 - 21:00', 'Cр 08:00 - 21:00',
      'Чт 08:00 - 21:00', 'Пт 08:00 - 21:00', 'Сб 08:00 - 21:00', 'Вс 08:00 - 21:00'],
    materials: ['Аккумуляторы'],
    longitude: 60.593477,
    latitude: 56.825232,
    id: 32,
  },
  {
    name: 'ТС ЯБЛОКО',
    address: 'ул.Белинского 66',
    worktime: undefined,
    materials: ['Пластик'],
    longitude: 60.615800,
    latitude: 56.829773,
    id: 33,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Декабристов 16/18 Б',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 21:00'],
    materials: ['Батарейки'],
    longitude: 60.620867,
    latitude: 56.825089,
    id: 34,
  },
  {
    name: 'ВЕЩЬ ДОБРА',
    address: 'ул.Мамина Сибиряка 40',
    worktime: undefined,
    materials: ['Одежда'],
    longitude: 60.614138,
    latitude: 56.849123,
    id: 35,
  },
  {
    name: 'ВЕЩЬ ДОБРА',
    address: 'ул.Олимпийская набережная 3',
    worktime: undefined,
    materials: ['Одежда'],
    longitude: 60.596989,
    latitude: 56.847095,
    id: 36,
  },
  {
    name: 'МЛЕЧНЫЙ ПУТЬ',
    address: 'ул.Свердлова 56',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 19:00'],
    materials: ['Батарейки'],
    longitude: 60.605541,
    latitude: 56.852706,
    id: 37,
  },
  {
    name: 'УРАЛЭКО',
    address: 'ул.Мельковский переулок 5, 307 офис, 3 этаж',
    worktime: undefined,
    materials: ['Лампочки', 'Опасные отходы'],
    longitude: 60.607095,
    latitude: 56.862248,
    id: 38,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Луначарского 133',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.621379,
    latitude: 56.838804,
    id: 39,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Чебышева 4, 204 офис 2 этаж',
    worktime: ['Пн 09:00 - 18:00', 'Вт 09:00 - 18:00', 'Cр 09:00 - 18:00',
      'Чт 09:00 - 18:00', 'Пт 09:00 - 18:00', 'Сб нерабочий', 'Вс нерабочий'],
    materials: ['Батарейки'],
    longitude: 60.634844,
    latitude: 56.839922,
    id: 40,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Мичурина 56',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.627793,
    latitude: 56.843127,
    id: 41,
  },
  {
    name: 'ЭЛЬДОРАДО',
    address: 'ул.Блюхера 39',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.640585,
    latitude: 56.852381,
    id: 42,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Комсомольская 2',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 19:00'],
    materials: ['Батарейки'],
    longitude: 60.653547,
    latitude: 56.856048,
    id: 43,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'ул.Блюхера 32',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 21:00'],
    materials: ['Пластик'],
    longitude: 60.652954,
    latitude: 56.856437,
    id: 44,
  },
  {
    name: 'СБОР МАКУЛАТУРЫ В ПОМОЩЬ БЕЗДОМНЫМ ЖИВОТНЫМ',
    address: 'ул.Вилонова 33А',
    worktime: ['Пн 09:00 - 20:00', 'Вт 09:00 - 20:00', 'Cр 09:00 - 20:00',
      'Чт 09:00 - 20:00', 'Пт 09:00 - 20:00', 'Сб 09:00 - 20:00', 'Вс 09:00 - 20:00'],
    materials: ['Бумага'],
    longitude: 60.637845,
    latitude: 56.869328,
    id: 45,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'ул.Сулимова 50',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 21:00'],
    materials: ['Пластик'],
    longitude: 60.630766,
    latitude: 56.863488,
    id: 46,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'ул.Сулимова 46',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Пластик'],
    longitude: 60.634090,
    latitude: 56.862632,
    id: 47,
  },
  {
    name: 'ЦЕНТР СОЦИАЛЬНОГО ОБСЛУЖИВАНИЯ НАСЕЛЕНИЯ',
    address: 'ул.Приисковая 11',
    worktime: ['Пн 09:00 - 17:00', 'Вт 09:00 - 17:00', 'Cр 09:00 - 17:00',
      'Чт 09:00 - 17:00', 'Пт 09:00 - 17:00', 'Сб нерабочий', 'Вс нерабочий'],
    materials: ['Одежда', 'Бумага'],
    longitude: 60.693792,
    latitude: 56.877823,
    id: 48,
  },
  {
    name: 'УРАЛВТОРМА',
    address: 'ул.Стачек 27б',
    worktime: ['Пн 10:00 - 18:00', 'Вт 10:00 - 18:00', 'Cр 10:00 - 18:00',
      'Чт 10:00 - 18:00', 'Пт 10:00 - 18:00', 'Сб 10:00 - 15:00', 'Вс нерабочий'],
    materials: ['Бумага'],
    longitude: 60.622555,
    latitude: 56.892822,
    id: 49,
  },
  {
    name: 'ЭЛЬДОРАДО',
    address: 'пр-т Космонавтов 41',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 21:00'],
    materials: ['Батарейки'],
    longitude: 60.613177,
    latitude: 56.899714,
    id: 50,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'пр.Космонавтов 23а',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 21:00'],
    materials: ['Пластик'],
    longitude: 60.612656,
    latitude: 56.888707,
    id: 51,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Ст.большевиков 82/2',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 20:00'],
    materials: ['Батарейки'],
    longitude: 60.619941,
    latitude: 56.901907,
    id: 52,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Ст.большевиков 82/1',
    worktime: ['Пн 10:00 - 20:00', 'Вт 10:00 - 20:00', 'Cр 10:00 - 20:00',
      'Чт 10:00 - 20:00', 'Пт 10:00 - 20:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 20:00'],
    materials: ['Батарейки'],
    longitude: 60.619887,
    latitude: 56.901218,
    id: 53,
  },
  {
    name: 'ЦЕНТР СОЦИАЛЬНОГО ОБСЛУЖИВАНИЯ НАСЕЛЕНИЯ',
    address: 'ул.Космонавтов 43в',
    worktime: ['Пн 08:30 - 17:30', 'Вт 08:30 - 17:30', 'Cр 08:30 - 17:30',
      'Чт 08:30 - 17:30', 'Пт 08:30 - 16:30', 'Сб нерабочий', 'Вс нерабочий'],
    materials: ['Одежда'],
    longitude: 60.611344,
    latitude: 56.901784,
    id: 54,
  },
  {
    name: 'METRO CASH AND CARRY',
    address: 'пр.Космонавтов 102а',
    worktime: ['Пн 07:00 - 22:00', 'Вт 07:00 - 22:00', 'Cр 07:00 - 22:00',
      'Чт 07:00 - 22:00', 'Пт 07:00 - 22:00', 'Сб 07:00 - 22:00', 'Вс 07:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.614578,
    latitude: 56.913185,
    id: 55,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'пр.Космонавтов 104',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Пластик'],
    longitude: 60.612494,
    latitude: 56.913510,
    id: 56,
  },
  {
    name: 'ЧИСТЫЙ ГОРОД',
    address: 'пр.Шефская 115',
    worktime: ['Пн 09:00 - 20:00', 'Вт 09:00 - 20:00', 'Cр 09:00 - 20:00',
      'Чт 09:00 - 20:00', 'Пт 09:00 - 20:00', 'Сб 09:00 - 20:00', 'Вс 10:00 - 17:00'],
    materials: ['Металл'],
    longitude: 60.613617,
    latitude: 56.914055,
    id: 57,
  },
  {
    name: 'LAMEL',
    address: 'пр.Космонавтов 108',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Пластик'],
    longitude: 60.616788,
    latitude: 56.919838,
    id: 58,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'ул.Победы 42',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 20:00'],
    materials: ['Батарейки'],
    longitude: 60.595911,
    latitude: 56.900648,
    id: 59,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'ул.40 лет Октября 54',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 21:00', 'Вс 10:00 - 20:00'],
    materials: ['Пластик'],
    longitude: 60.592561,
    latitude: 56.898166,
    id: 60,
  },
  {
    name: 'МЛЕЧНЫЙ ПУТЬ',
    address: 'ул.Культуры 8',
    worktime: ['Пн 10:00 - 21:00', 'Вт 10:00 - 21:00', 'Cр 10:00 - 21:00',
      'Чт 10:00 - 21:00', 'Пт 10:00 - 21:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 20:00'],
    materials: ['Батарейки'],
    longitude: 60.588078,
    latitude: 56.887536,
    id: 61,
  },
  {
    name: 'МЛЕЧНЫЙ ПУТЬ',
    address: 'ул.22-ого Партсъезда 2',
    worktime: undefined,
    materials: ['Батарейки'],
    longitude: 60.583299,
    latitude: 56.886115,
    id: 62,
  },
  {
    name: 'ЛАБИРИНТ.РУ, ИНТЕРНЕТ-МАГАЗИН',
    address: 'пр.Таганская 60а',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Пластик'],
    longitude: 60.629643,
    latitude: 56.908330,
    id: 63,
  },
  {
    name: 'УРАЛВТОРМА',
    address: 'ул.Черепанова 21А',
    worktime: ['Пн 10:00 - 18:00', 'Вт 10:00 - 18:00', 'Cр 10:00 - 18:00',
      'Чт 10:00 - 18:00', 'Пт 10:00 - 18:00', 'Сб 10:00 - 15:00', 'Вс нерабочий'],
    materials: ['Бумага'],
    longitude: 60.564237,
    latitude: 56.857967,
    id: 64,
  },
  {
    name: 'СП ЭКОЛОГИЯ',
    address: 'ул.Юмашева 9, офис 2',
    worktime: undefined,
    materials: ['Пластик'],
    longitude: 60.571127,
    latitude: 56.843289,
    id: 65,
  },
  {
    name: 'ЖИЗНЬМАРТ',
    address: 'ул.Опалихинская 44',
    worktime: undefined,
    materials: ['Бытовая техника', 'Батарейки', 'Бумага'],
    longitude: 60.556718,
    latitude: 56.854699,
    id: 66,
  },
  {
    name: 'LOVE REPUBLIC // КОНТЕЙНЕР "ВТОРОЕ ДЫХАНИЕ"',
    address: 'пр.Халтурина 55',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Одежда'],
    longitude: 60.550277,
    latitude: 56.853100,
    id: 67,
  },
  {
    name: 'УРАЛВТОРМА',
    address: 'ул.Минометчиков 7А',
    worktime: ['Пн 10:00 - 18:00', 'Вт 10:00 - 18:00', 'Cр 10:00 - 18:00',
      'Чт 10:00 - 18:00', 'Пт 10:00 - 18:00', 'Сб 10:00 - 15:00', 'Вс нерабочий'],
    materials: ['Бумага'],
    longitude: 60.535643,
    latitude: 56.861284,
    id: 68,
  },
  {
    name: 'ТС ЯБЛОКО',
    address: 'ул.Техническая 37',
    worktime: undefined,
    materials: ['Пластик'],
    longitude: 60.532365,
    latitude: 56.865363,
    id: 69,
  },
  {
    name: 'ФИНТЕХКОМПЛЕКТ',
    address: 'ул.Надеждинская 13',
    worktime: ['Пн 09:00 - 17:00', 'Вт 09:00 - 17:00', 'Cр 09:00 - 17:00',
      'Чт 09:00 - 17:00', 'Пт 09:00 - 17:00', 'Сб 09:00 - 17:00', 'Вс 09:00 - 17:00'],
    materials: ['Бумага'],
    longitude: 60.533811,
    latitude: 56.868221,
    id: 70,
  },
  {
    name: 'ЦЕНТР СОЦИАЛЬНОГО ОБСЛУЖИВАНИЯ НАСЕЛЕНИЯ',
    address: 'ул.Коуровская 9',
    worktime: ['Пн 08:30 - 17:30', 'Вт 08:30 - 17:30', 'Cр 08:30 - 17:30',
      'Чт 08:30 - 17:30', 'Пт 08:30 - 16:30', 'Сб нерабочий', 'Вс нерабочий'],
    materials: ['Одежда'],
    longitude: 60.523310,
    latitude: 56.870966,
    id: 71,
  },
  {
    name: 'TOВАРЫ ДЛЯ ДОМА',
    address: 'ул.Шаумяна 93',
    worktime: ['Пн 10:00 - 20:00', 'Вт 10:00 - 20:00', 'Cр 10:00 - 20:00',
      'Чт 10:00 - 20:00', 'Пт 10:00 - 20:00', 'Сб 10:00 - 20:00', 'Вс 10:00 - 20:00'],
    materials: ['Батарейки'],
    longitude: 60.565926,
    latitude: 56.814803,
    id: 72,
  },
  {
    name: 'ФИНТЕХКОМПЛЕКТ',
    address: 'ул.Большакова 151',
    worktime: ['Пн 09:00 - 17:00', 'Вт 09:00 - 17:00', 'Cр 09:00 - 17:00',
      'Чт 09:00 - 17:00', 'Пт 09:00 - 17:00', 'Сб 09:00 - 17:00', 'Вс нерабочий'],
    materials: ['Бумага'],
    longitude: 60.592291,
    latitude: 56.815966,
    id: 73,
  },
  {
    name: 'LAMEL',
    address: 'пр.8 Марта 110',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Стекло'],
    longitude: 60.607769,
    latitude: 56.813626,
    id: 74,
  },
  {
    name: 'КАЗАНОВА69',
    address: 'пр.8 Марта 127',
    worktime: ['Пн 09:00 - 21:00', 'Вт 09:00 - 21:00', 'Cр 09:00 - 21:00',
      'Чт 09:00 - 21:00', 'Пт 09:00 - 21:00', 'Сб 09:00 - 21:00', 'Вс 09:00 - 21:00'],
    materials: ['Батарейки'],
    longitude: 60.610015,
    latitude: 56.809965,
    id: 75,
  },
  {
    name: 'МАГАЗИН "ЗАПОВЕДНИК"',
    address: 'пр.Союзная 2',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Бумага'],
    longitude: 60.606700,
    latitude: 56.807693,
    id: 76,
  },
  {
    name: 'М.ВИДЕО',
    address: 'пр.8 Марта 149',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.612324,
    latitude: 56.806905,
    id: 77,
  },
  {
    name: 'УРАЛВТОРМА',
    address: 'ул.Чайковского 82а',
    worktime: ['Пн 10:00 - 18:00', 'Вт 10:00 - 18:00', 'Cр 10:00 - 18:00',
      'Чт 10:00 - 18:00', 'Пт 10:00 - 18:00', 'Сб 10:00 - 15:00', 'Вс нерабочий'],
    materials: ['Бумага'],
    longitude: 60.620094,
    latitude: 56.803081,
    id: 78,
  },
  {
    name: 'ЦЕНТР СОЦИАЛЬНОГО ОБСЛУЖИВАНИЯ НАСЕЛЕНИЯ',
    address: 'ул.Трактористов 19',
    worktime: ['Пн 08:30 - 17:30', 'Вт 08:30 - 17:30', 'Cр 08:30 - 17:30',
      'Чт 08:30 - 17:30', 'Пт 08:30 - 16:30', 'Сб нерабочий', 'Вс нерабочий'],
    materials: ['Одежда', 'Бумага'],
    longitude: 60.624047,
    latitude: 56.801923,
    id: 79,
  },
  {
    name: 'ЗОЛУШКА',
    address: 'пр.Белинского 165',
    worktime: ['Пн 09:00 - 20:00', 'Вт 09:00 - 20:00', 'Cр 09:00 - 20:00',
      'Чт 09:00 - 20:00', 'Пт 09:00 - 20:00', 'Сб 09:00 - 20:00', 'Вс 10:00 - 18:00'],
    materials: ['Батарейки'],
    longitude: 60.627164,
    latitude: 56.804106,
    id: 80,
  },
  {
    name: 'ИП ЯРОСЛАВЦЕВ',
    address: 'пр.Саввы Белых 2б',
    worktime: ['Пн 08:00 - 18:00', 'Вт 08:00 - 18:00', 'Cр 08:00 - 18:00',
      'Чт 08:00 - 18:00', 'Пт 08:00 - 18:00', 'Сб 08:00 - 18:00', 'Вс 08:00 - 18:00'],
    materials: ['Бытовая техника', 'Металл', 'Пластик', 'Стекло', 'Бумага'],
    longitude: 60.631575,
    latitude: 56.800222,
    id: 81,
  },
  {
    name: 'ТС ЯБЛОКО',
    address: 'ул.Крестинского 59/1',
    worktime: undefined,
    materials: ['Пластик'],
    longitude: 60.634108,
    latitude: 56.794071,
    id: 82,
  },
  {
    name: 'УК "РЭМП УЖСК"',
    address: 'ул.Академика Шварца 14Б',
    worktime: undefined,
    materials: ['Батарейки', 'Опасные отходы', 'Бумага', 'Лампочки'],
    longitude: 60.624675,
    latitude: 56.794199,
    id: 83,
  },
  {
    name: 'УРАЛВТОРМА',
    address: 'ул.Крестинского 31',
    worktime: ['Пн 10:00 - 18:00', 'Вт 10:00 - 18:00', 'Cр 10:00 - 18:00',
      'Чт 10:00 - 18:00', 'Пт 10:00 - 18:00', 'Сб 10:00 - 15:00', 'Вс нерабочий'],
    materials: ['Бумага'],
    longitude: 60.614084,
    latitude: 56.791458,
    id: 84,
  },
  {
    name: 'М.ВИДЕО',
    address: 'ул.Дублёр Сибирского тракта 2',
    worktime: ['Пн 10:00 - 22:00', 'Вт 10:00 - 22:00', 'Cр 10:00 - 22:00',
      'Чт 10:00 - 22:00', 'Пт 10:00 - 22:00', 'Сб 10:00 - 22:00', 'Вс 10:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.672708,
    latitude: 56.829374,
    id: 85,
  },
  {
    name: 'METRO CASH AND CARRY',
    address: 'ул.Дублёр Сибирского тракта 21',
    worktime: ['Пн 07:00 - 22:00', 'Вт 07:00 - 22:00', 'Cр 07:00 - 22:00',
      'Чт 07:00 - 22:00', 'Пт 07:00 - 22:00', 'Сб 07:00 - 22:00', 'Вс 07:00 - 22:00'],
    materials: ['Батарейки'],
    longitude: 60.712944,
    latitude: 56.823676,
    id: 86,
  },
  {
    name: 'УК "РЭМП УЖСК"',
    address: 'ул.Дублёр Сибирского тракта 19/1',
    worktime: undefined,
    materials: ['Батарейки'],
    longitude: 60.709207,
    latitude: 56.824877,
    id: 87,
  },
  {
    name: 'ЧИСТЫЙ ГОРОД',
    address: 'пр.Луганская 59/2',
    worktime: ['Пн 09:00 - 20:00', 'Вт 09:00 - 20:00', 'Cр 09:00 - 20:00',
      'Чт 09:00 - 20:00', 'Пт 09:00 - 20:00', 'Сб 09:00 - 20:00', 'Вс 10:00 - 17:00'],
    materials: ['Металл'],
    longitude: 60.645202,
    latitude: 56.797605,
    id: 88,
  },
  {
    name: 'ЭЛЕКТРОТЕХМОНТАЖ',
    address: 'ул.Базовый переулок 47',
    worktime: ['Пн 09:00 - 18:00', 'Вт 09:00 - 18:00', 'Cр 09:00 - 18:00',
      'Чт 09:00 - 18:00', 'Пт 09:00 - 18:00', 'Сб 09:00 - 17:00', 'Вс 09:00 - 17:00'],
    materials: ['Батарейки'],
    longitude: 60.647331,
    latitude: 56.802272,
    id: 89,
  },
  {
    name: 'ЛЕРУА МЕРЛЕН',
    address: 'ул.Базовый переулок 45',
    worktime: ['Пн 07:00 - 23:00', 'Вт 07:00 - 23:00', 'Cр 07:00 - 23:00',
      'Чт 07:00 - 23:00', 'Пт 07:00 - 23:00', 'Сб 07:00 - 23:00', 'Вс 07:00 - 23:00'],
    materials: ['Батарейки', 'Лампочки'],
    longitude: 60.649703,
    latitude: 56.801686,
    id: 90,
  },
];

export default points;
