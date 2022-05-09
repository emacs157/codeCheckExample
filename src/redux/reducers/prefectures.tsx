import { createReducer } from '@reduxjs/toolkit';
import {
    GetPrefecturesResponse,
    PrefecturesState,
    TypeWithAxiosResponse,
} from '../../assets/interfaces/prefectures';
import { STATUS } from '../../assets/literal';
import * as types from '../actions/index';

const initialState: PrefecturesState = {
    status: STATUS.IDLE,
    results: [],
};

export const Prefectures = createReducer(initialState, {
    [types.GET_PREFECTURES_START]: (state) => ({
        ...state,
        status: STATUS.RUNNING,
    }),
    [types.GET_PREFECTURES_SUCCESS]: (
        state,
        payload: TypeWithAxiosResponse<GetPrefecturesResponse>
    ) => {
        return {
            ...state,
            status: STATUS.SUCCESS,
            results: payload.response.data.result,
        };
    },
    [types.GET_PREFECTURES_ERROR]: (state) => ({
        ...state,
        status: STATUS.ERROR,
    }),
});
