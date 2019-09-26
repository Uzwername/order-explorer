import React from "react";
import PropTypes from "prop-types";
import { SearchBar } from "IndexComponents/searchBar";

/**
* While using this approach the
* information might be found in
* the keys, it should not
* hurt much.
*
* RegExp search possibility
* left enabled intentionally.
*/
const globalSearcher = query => e => {

	//JSON-encoded string
	const haystack = JSON.stringify(e, (key, value) => {

		if ( key === `View` ) {
			return undefined;
		}

		return value;

	});

	const needle = new RegExp( query, `gui` );

	return needle.test( haystack );

};

export const SearchBarContainer = props => {

	const [searchQuery, setSearchQuery] = React.useState(``);

	const setSearchQueryValue = e => {
		setSearchQuery( e.target.value );
	};

	const handleSearch = e => {

		// Works both on enter  && click.
		if ( e.key === `Enter` || e.type === `click` ) {

			/**
			* Sets handleSearch to
			* 2 which is global search
			* mode.
			*/
			props.handleSearch(2);

			// Sorts orders according to query
			props.handleShuffle(
				globalSearcher( searchQuery )
			);

		}

	};

	return (
		<SearchBar
			handleSearch = { handleSearch }
			handleChange = { setSearchQueryValue }
			searchBarTextValue = { searchQuery }
		/>
	);

};

SearchBarContainer.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	handleShuffle: PropTypes.func.isRequired,
};
