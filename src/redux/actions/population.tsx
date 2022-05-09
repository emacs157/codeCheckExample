import { createAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../../assets/interface';
import { RequestParams } from '../../assets/interfaces/population';
import * as types from './index';

export const getPopulationStartAction = createAction(
	types.GET_POPULATION_START,
	function prepare(requestParams: RequestParams) {
		return { payload: requestParams };
	}
);

export const getPopulationSuccessAction = createAction(
	types.GET_POPULATION_SUCCESS,
	function prepare(res) {
		return {
			payload: res,
		};
	}
);

export const getPopulationErrorAction = createAction(
	types.GET_POPULATION_ERROR,
	function prepare(err: ErrorResponse) {
		return {
			payload: err,
		};
	}
);

export const removePopulationAction = createAction(
	types.REMOVE_POPULATION,
	function prepare(requestParams: RequestParams) {
		return { payload: requestParams };
	}
);
