import React from 'react'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'

export default React.createClass({

  render() {
    console.log(this.props.results);
    var carouselNodes = this.props.results.map(function(result) {
      return (
        <Carousel.Item>
            <img src={result.originalImage} />
            <Carousel.Caption>
              <h3>{result.domain} : {result.createdAt}</h3>
            </Carousel.Caption>
        </Carousel.Item>
      );
    });
    console.log(carouselNodes);
    return (
      <div>
        <Carousel>
        {carouselNodes}
        </Carousel>
      </div>
    )
  }
})
