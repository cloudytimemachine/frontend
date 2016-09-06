import React from 'react'
import results from 'json!../search_data.json'
import Carousel from './SearchResults/Carousel'

export default React.createClass({

  render() {
    //console.log(this.props.params);
    return (
      <div>
        <h2>{this.props.params.query}</h2>
        <Carousel results={results}/>
      </div>
    )
  }
})
