import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../assets/interface';
import { PopulationState } from '../../assets/interfaces/population';
import { PrefecturesState } from '../../assets/interfaces/prefectures';
import HeaderComponent from '../../components/header';
import { getPrefecturesStartAction } from '../../redux/actions/prefectures';
import PopulationComponent from './population/population';
import PrefecturesComponent from './profectures/prefectures';

const Home = () => {
	const dispatch = useDispatch();

	const [prefectures, population]: [PrefecturesState, PopulationState] = useSelector((state: ReduxState) => [
		state.Prefectures,
		state.Population,
	]);

	const fetchPrefectures = useCallback(() => {
		dispatch(getPrefecturesStartAction());
	}, [dispatch]);

	useEffect(() => {
		fetchPrefectures();
	}, [fetchPrefectures]);

	return (
		<>
			<HeaderComponent></HeaderComponent>
			<PrefecturesComponent prefectures={prefectures} population={population}></PrefecturesComponent>
			<PopulationComponent population={population}></PopulationComponent>
		</>
	);
};

export default Home;
