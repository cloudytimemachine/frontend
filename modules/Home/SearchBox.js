import React from 'react'
import { Link } from 'react-router'
import SearchBox from '../Common/SearchBox'

export default React.createClass({
  render() {
    return (
      <div className="searchBox">
        <h4>Search the history for a domain or URL</h4>
        <SearchBox />
      </div>
    )
  }
})
