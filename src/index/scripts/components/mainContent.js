import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import mainContentStyles from "IndexStyles/mainContent.scss";

export const MainContent = () => {

	const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event, newValue) => setCurrentTab(newValue);

  return (
		<div class = { mainContentStyles.tabContainer }>
	    <Paper square>
	      <Tabs
	        value = { currentTab }
	        indicatorColor = "primary"
	        textColor = "primary"
	        onChange = { handleChange }
	        aria-label = "View mode switcher"
	      >
	        <Tab label = "All Orders" />
	        <Tab label = "Stage View" />
	      </Tabs>
	    </Paper>
		</div>
  );
};
