import { createReducer, current } from '@reduxjs/toolkit';
import {
    DataByLabel,
    PopulationResultState,
    PopulationState,
} from '../../assets/interfaces/population';
import { STATUS } from '../../assets/literal';
import * as types from '../actions/index';

const initialState: PopulationState = {
    status: STATUS.IDLE,
    requestParams: {
        prefName: '北海道',
        prefCode: 1,
        cityCode: '-',
    },
    results: [
        {
            name: '栃木県',
            year: [
                1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005,
                2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045,
            ],
            data: [
                1513624, 1521656, 1580021, 1698003, 1792201, 1866066, 1935168,
                1984390, 2004817, 2016631, 2007683, 1974255, 1930235, 1872842,
                1805949, 1730414, 1647288, 1560619,
            ],
            young: [
                510097, 429447, 389016, 414123, 433232, 425807, 380087, 339253,
                306905, 285245, 269823, 252836, 234328, 215694, 200974, 186959,
                175984, 164918,
            ],
            adult: [
                909207, 986774, 1069584, 1143083, 1191109, 1243861, 1315228,
                1350635, 1352311, 1336513, 1281274, 1203616, 1138540, 1084830,
                1031754, 969256, 883575, 812961,
            ],
            elderly: [
                94320, 105435, 121421, 140651, 167438, 196328, 238505, 292947,
                344506, 390896, 438196, 508392, 557367, 572318, 573221, 574199,
                587729, 582740,
            ],
        },
    ],
};

export const Population = createReducer(initialState, {
    [types.GET_POPULATION_START]: (state, action) => {
        return {
            ...state,
            status: STATUS.RUNNING,
            requestParams: action.payload,
        };
    },
    [types.GET_POPULATION_SUCCESS]: (state, action) => {
        const newResult = {
            name: state.requestParams.prefName,
            year: action.response.data.result.data[0].data.map(
                (item: DataByLabel) => {
                    return item['year'];
                }
            ),
            data: action.response.data.result.data[0].data.map(
                (item: DataByLabel) => {
                    return item['value'];
                }
            ),
            young: action.response.data.result.data[1].data.map(
                (item: DataByLabel) => {
                    return item['value'];
                }
            ),
            adult: action.response.data.result.data[2].data.map(
                (item: DataByLabel) => {
                    return item['value'];
                }
            ),
            elderly: action.response.data.result.data[3].data.map(
                (item: DataByLabel) => {
                    return item['value'];
                }
            ),
        };

        return {
            ...state,
            status: STATUS.SUCCESS,
            results: [...current(state).results, { ...newResult }],
        };
    },
    [types.GET_POPULATION_ERROR]: (state) => ({
        ...state,
        status: STATUS.ERROR,
    }),

    [types.REMOVE_POPULATION]: (state, action) => {
        return {
            ...state,
            results: current(state).results.filter(
                (result: PopulationResultState) =>
                    result.name !== action.payload.prefName
            ),
        };
    },
});
