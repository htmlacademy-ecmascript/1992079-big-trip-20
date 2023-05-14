import FilterView from './view/filter.js';
import SortView from './view/sort.js';
import CreateFormView from './view/create-form.js';
import EditFormView from './view/edit-form.js';
import PointView from './view/point.js';
import { render } from './render.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');


render(new FilterView, filtersElement);
render(new SortView, eventsElement);
render(new CreateFormView, eventsElement);
render(new EditFormView, eventsElement);
render(new PointView, eventsElement);
render(new PointView, eventsElement);
render(new PointView, eventsElement);
