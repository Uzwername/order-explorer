import "IndexStyles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Navigation } from "IndexComponents/navigation";
import { MainContentContainer } from "IndexContainers/mainContentContainer";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const Index = () => (
	<>
	<Navigation />
		<MainContentContainer />
	</>
);

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
		<Index />
	</ThemeProvider>,
	document.getElementById(`app`)
);
