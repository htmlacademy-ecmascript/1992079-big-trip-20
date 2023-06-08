import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import PointView from '../view/point-view.js';
import PointsModel from '../model/points-model';
import { render } from '../render.js';

const POINTS_COUNT = 3;

const filtersElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

render(new FilterView, filtersElement);
render(new SortView, eventsElement);
render(new CreateFormView, eventsElement);
render(new EditFormView(pointsModel.getPoints()[0]), eventsElement);
for (let i = 0; i < POINTS_COUNT; i++) {
  render(new PointView(pointsModel.getPoints()[i]), eventsElement);
}

