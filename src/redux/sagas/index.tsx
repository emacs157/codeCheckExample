import { AnyAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, CallEffect, Effect, fork, ForkEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { GetPopulationResponse } from '../../assets/interfaces/population';
import { GetPrefecturesResponse } from '../../assets/interfaces/prefectures';
import * as types from '../actions/index';
import { getPopulationService, getPrefecturesService } from '../services/apiRequests';

function* getPrefecturesSaga(): Generator<
	// step types
	CallEffect<AxiosResponse<GetPrefecturesResponse>> | PutEffect<AnyAction>,
	// return type
	void,
	// intermediate argument
	AxiosResponse<GetPrefecturesResponse>
> {
	try {
		const response: AxiosResponse<GetPrefecturesResponse> = yield call(getPrefecturesService);

		yield put({ type: types.GET_PREFECTURES_SUCCESS, response });
	} catch (error) {
		yield put({ type: types.GET_PREFECTURES_ERROR, error });
	}
}

function* getPopulationSaga(request: Effect): Generator<
	// step types
	CallEffect<AxiosResponse<GetPopulationResponse>> | PutEffect<AnyAction>,
	// return type
	void,
	// intermediate argument
	AxiosResponse<GetPopulationResponse>
> {
	try {
		const response: AxiosResponse<GetPopulationResponse> = yield call(getPopulationService, request);
		yield put({ type: types.GET_POPULATION_SUCCESS, response });
	} catch (error) {
		yield put({ type: types.GET_POPULATION_ERROR, error });
	}
}

function* watchGetPrefecturesRequest(): Generator<ForkEffect<never>> {
	yield takeEvery(types.GET_PREFECTURES_START, getPrefecturesSaga);
}

function* watchGetPopulationRequest(): Generator<ForkEffect<never>> {
	yield takeEvery(types.GET_POPULATION_START, getPopulationSaga);
}
export const rootSaga: () => Generator<ForkEffect> = function* usersSagas() {
	yield fork(watchGetPrefecturesRequest);
	yield fork(watchGetPopulationRequest);
};
