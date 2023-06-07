import {getRandomArrayElement} from '../utils.js';

const offers = [
  {
    id: 0,
    type: 'Taxi',
    description: 'add Uber',
    cost: 20
  },
  {
    id: 1,
    type: 'Train',
    description: 'Business class',
    cost: 50
  }
];

const destinations = [
  {
    id: 0,
    cityName: 'Amsterdam',
    imageUrl: '../../img/photos/2.jpg'
  },
  {
    id: 1,
    cityName: 'Geneva',
    imageUrl: '../../img/photos/4.jpg'
  }
];

const points = [
  {
    type: 'Taxi',
    destination: destinations[0],
    startDate: new Date('2023-04-23T16:00:00'),
    endDate: new Date('2023-04-23T17:00:00'),
    cost: 70,
    offers: offers[0]
  },
  {
    type: 'Train',
    destination: destinations[1],
    startDate: new Date('2023-04-27 16:00'),
    endDate: new Date('2023-04-27 17:00'),
    cost: 40,
    offers: offers[1]
  }
];

const getRandomPoint = () => getRandomArrayElement(points);

export {getRandomPoint};
