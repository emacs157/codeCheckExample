import { STATUS } from '../literal';
export interface GetPopulationResponse {
    message: null | string;
    result: PopulationResult;
}

export interface PopulationResult {
    boundaryYear: number;
    data: DataByBoundaryYear[];
}

export interface DataByBoundaryYear {
    label: string;
    data: DataByLabel[];
}

export interface DataByLabel {
    year: number;
    value: number;
    rate?: number;
}

export interface PopulationState {
    status: typeof STATUS[keyof typeof STATUS];
    requestParams: RequestParams;
    results: PopulationResultState[];
}

export interface PopulationResultState {
    name: string;
    year: number[];
    data: number[];
    young: number[];
    adult: number[];
    elderly: number[];
}

export interface RequestParams {
    prefName: string;
    prefCode: number;
    cityCode: string;
}
