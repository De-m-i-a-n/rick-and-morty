import { combineReducers } from 'redux';

import application from './application';
import typesFilter from './typesFilter';

const reducers = combineReducers({
    application,
    typesFilter
});

export default reducers;