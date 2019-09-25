import React from "react";
import PropTypes from "prop-types";
import { SearchBar } from "IndexComponents/searchBar";

export const SearchBarContainer = props => {

	const [searchQuery, setSearchQuery] = React.useState(``);

	// Ignores passed event since it'll not be used
	const handleSearch = () => props.handleSearch(2);

	return (
		<SearchBar
			handleSearch = { handleSearch }
			handleChange = { setSearchQuery }
		/>
	);

};

SearchBarContainer.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};
