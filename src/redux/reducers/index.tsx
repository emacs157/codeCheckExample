
import { combineReducers } from 'redux';

import { Population } from './population';
import { Prefectures } from './prefectures';
export const combinedReducers = combineReducers({
	Prefectures,
	Population,
});
