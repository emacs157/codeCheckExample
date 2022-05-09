import { Checkbox, FormControlLabel, Grid, Paper } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { PopulationResultState, PopulationState } from '../../../assets/interfaces/population';
import { PrefectureResult, PrefecturesState } from '../../../assets/interfaces/prefectures';
import { getPopulationStartAction, removePopulationAction } from '../../../redux/actions/population';

const PrefecturesComponent = (props: { prefectures: PrefecturesState; population: PopulationState }): JSX.Element => {
	const dispatch = useDispatch();

	const isChecked = (prefName: string): boolean => {
		const names = props.population.results.map((populationResult: PopulationResultState) => populationResult.name);

		return names.includes(prefName);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, prefName: string, prefCode: number) => {
		event.target.checked
			? dispatch(
					getPopulationStartAction({
						prefName,
						prefCode,
						cityCode: '-',
					})
			  )
			: dispatch(
					removePopulationAction({
						prefName,
						prefCode,
						cityCode: '-',
					})
			  );
		// setSpacing(Number((event.target as HTMLInputElement).value));
	};

	return (
		<>
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				<Grid item xs={12}>
					<Paper sx={{ p: 2 }}>
						<Grid container>
							{props.prefectures.results &&
								props.prefectures.results.map((prefecture: PrefectureResult, index: number) => (
									<Grid item key={index}>
										<FormControlLabel
											style={{
												display: 'inline-block',
											}}
											control={<Checkbox />}
											checked={isChecked(prefecture.prefName)}
											label={prefecture.prefName}
											data-testid={index}
											onChange={(event: React.SyntheticEvent<Element, Event>) =>
												handleChange(
													event as ChangeEvent<HTMLInputElement>,
													prefecture.prefName,
													prefecture.prefCode
												)
											}
										/>
									</Grid>
								))}
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};
export default PrefecturesComponent;
