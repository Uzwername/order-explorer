import "IndexStyles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Navigation } from "IndexComponents/navigation";
import { MainContent } from "IndexComponents/mainContent";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const Index = () => (
	<>
		<Navigation />
		<MainContent />
	</>
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#00FF00',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

ReactDOM.render (
	<ThemeProvider theme = {theme}>
		<Index />
	</ThemeProvider>,
	document.getElementById(`app`)
);
