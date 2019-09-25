import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import navStyles from "IndexStyles/navigation.scss";

export const Navigation = () => (
	<nav id = { navStyles.mainNav }>
		<div className = { navStyles.searchContainer }>
			<TextField
				id = "searchBar"
				label = "Search"
				placeholder = "#3418"
				fullWidth
				variant = "outlined"
				InputLabelProps = {{
					shrink: true,
				}}
				InputProps = {{
					endAdornment: (
						<InputAdornment position = "end">
							<IconButton
								aria-label = "Search orders"
								onClick={() => alert(`Hi!`)}
							>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	</nav>
);
