import { AxiosResponse } from 'axios';
import { GetPopulationResponse } from '../../assets/interfaces/population';
import { GetPrefecturesResponse } from '../../assets/interfaces/prefectures';
import { instance } from '../../assets/profile';
import { Effect } from 'redux-saga/effects';
export const getPrefecturesService = (): Promise<
	AxiosResponse<GetPrefecturesResponse>
> => {
	const urlPart = `/api/v1/prefectures`;
	return instance.get(urlPart);
};

export const getPopulationService = (
	requestParams: Effect
): Promise<AxiosResponse<GetPopulationResponse>> => {
	const urlPart = `/api/v1/population/composition/perYear`;
	return instance.get(urlPart, { params: requestParams.payload });
};
