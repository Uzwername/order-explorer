import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export const SearchBar = () => (
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
						onClick={() => alert(
							`Hi! The search is not developed yet, `
								.concat(`sorry for any inconvenience caused.`))}

					>
						<SearchIcon />
					</IconButton>
				</InputAdornment>
			),
		}}
	/>
);
