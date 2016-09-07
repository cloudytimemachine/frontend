import React from 'react'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'
import moment from 'moment'

export default React.createClass({

  render() {
    console.log(this.props.results);
    var carouselNodes = this.props.results.map(function(result) {
      var timeAgo =  moment(result.createdAt).fromNow();
      return (
        <Carousel.Item>
            <img src={result.thumb} />
            <Carousel.Caption>
              <h3>{result.domain} : {timeAgo}</h3>
            </Carousel.Caption>
        </Carousel.Item>
      );
    });
    console.log(carouselNodes);
    return (
      <div>
        <Carousel style={{margin: '0 auto' }}>
        {carouselNodes}
        </Carousel>
      </div>
    )
  }
})
