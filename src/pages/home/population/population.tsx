import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PopulationState } from '../../../assets/interfaces/population';
import React from 'react';

export const options = {
	title: {
		text: 'codeCheck',
	},
	subtitle: {
		text: 'homeWork',
	},
	series: [
		{
			type: 'line',
			data: [1, 2, 3],
		},
	],
	yAxis: {
		title: {
			text: 'Number of Population',
		},
	},
	xAxis: {
		title: {
			text: 'Number of Year',
		},
		accessibility: {
			rangeDescription: 'Range: 2010 to 2017',
		},
	},
	responsive: {
		rules: [
			{
				condition: {
					maxWidth: 500,
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom',
					},
				},
			},
		],
	},
};
const PopulationComponent = (props: {
	population: PopulationState;
}): JSX.Element => {
	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={{
				...options,
				series: props.population?.results ?? options.series,
				xAxis: {
					title: {
						text: 'Number of Year',
					},
					type: 'datetime',
					categories: props.population?.results[0]?.year,
				},
			}}
		/>
	);
};
export default PopulationComponent;
