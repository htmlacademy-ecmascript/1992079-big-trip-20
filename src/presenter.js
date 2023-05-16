import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import CreateFormView from './view/create-form-view.js';
import EditFormView from './view/edit-form-view.js';
import PointView from './view/point-view.js';
import { render } from './render.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');


render(new FilterView, filtersElement);
render(new SortView, eventsElement);
render(new CreateFormView, eventsElement);
render(new EditFormView, eventsElement);
for (let i = 0; i < 3; i++) {
  render(new PointView, eventsElement);
}

