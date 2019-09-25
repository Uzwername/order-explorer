import "IndexStyles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "IndexContainers/appContainer";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: `#D10C15`,
			dark: `#666`,
			contrastText: `#FFF`,
		},
		secondary: {
			main: `#666`,
			dark: `#777`,
			contrastText: `#000`,
		},
	},
});

ReactDOM.render (
	<ThemeProvider theme = {theme}>
		<AppContainer />
	</ThemeProvider>,
	document.getElementById(`app`)
);
