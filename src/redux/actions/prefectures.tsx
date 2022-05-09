import { ActionCreatorWithoutPayload, ActionCreatorWithPreparedPayload, createAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ErrorResponse } from '../../assets/interface';
import { GetPrefecturesResponse } from '../../assets/interfaces/prefectures';
import * as types from './index';

export const getPrefecturesStartAction: ActionCreatorWithoutPayload = createAction(types.GET_PREFECTURES_START);
//:ActionCreatorWithPreparedPayload<any>
export const getPrefecturesSuccessAction: ActionCreatorWithPreparedPayload<
	[payload: AxiosResponse<GetPrefecturesResponse>],
	AxiosResponse<GetPrefecturesResponse>,
	'GET_PREFECTURES_SUCCESS',
	never,
	never
> = createAction(types.GET_PREFECTURES_SUCCESS, function prepare(payload: AxiosResponse<GetPrefecturesResponse>) {
	return { payload };
});

export const getPrefecturesErrorAction = createAction(
	types.GET_PREFECTURES_ERROR,
	function prepare(err: ErrorResponse) {
		return {
			payload: err,
		};
	}
);
