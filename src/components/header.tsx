import './header.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const HeaderComponent = (): JSX.Element => {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography variant="h6" color="inherit" component="div">
					都道府県
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
export default HeaderComponent;
