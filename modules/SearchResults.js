import React from 'react'
import results from 'json!../search_data.json'
import Carousel from './SearchResults/Carousel'
import Alert from './SearchResults/Alert'

export default React.createClass({

  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <Alert url={this.props.params.splat} search={this.props.location.state}/>
        <h2>{this.props.params.splat}</h2>
        <Carousel results={results}/>
      </div>
    )
  }
})
