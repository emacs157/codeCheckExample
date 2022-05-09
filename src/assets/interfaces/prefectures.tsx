import { AxiosResponse } from 'axios';
import { STATUS } from '../literal';

export interface GetPrefecturesResponse {
    message: null | string;
    result: PrefectureResult[];
}

export interface PrefectureResult {
    prefCode: number;
    prefName: string;
}
export interface TypeWithAxiosResponse<T> {
    type: typeof STATUS[keyof typeof STATUS];
    response: AxiosResponse<T>;
}

export interface PrefecturesState {
    status: typeof STATUS[keyof typeof STATUS];
    results: PrefectureResult[];
}
