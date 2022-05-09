import { PopulationState } from './interfaces/population';
import { PrefecturesState } from './interfaces/prefectures';

export interface SuccessResponse {
	status?: string;
}

export interface ErrorResponse {
	status?: string;
}

export interface ReduxState {
	Prefectures: PrefecturesState;
	Population: PopulationState;
	_persist: {
		version: number;
		rehydrated: boolean;
	};
}
