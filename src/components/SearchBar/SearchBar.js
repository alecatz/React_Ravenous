import React from 'react';
import './SearchBar.css';

//"sort_by" parameter in Yelp API query string
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term:'',location:'',sortBy:'best_match'};
  }
  //dynamically creates the list items needed to display the sort options
  //(Best Match, Highest Rated, Most Reviewed).
  //This is to help future proof against potential changes to the Yelp API.
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      //let sortByOptionValue = sortByOptions[sortByOption];
      //return <li key={sortByOptionValue}>{sortByOption}</li>;
      return <li key={sortByOptions.sortByOption}>{sortByOption}</li>;
    });
  }
  
  //returns the current CSS class for a sorting option
  getSortByClass(sortByOption) {
    if (this.state.sortBy == sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
};

export default SearchBar;
