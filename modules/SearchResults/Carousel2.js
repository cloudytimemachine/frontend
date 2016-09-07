import React from 'react'
import Carousel from 'nuka-carousel'
import moment from 'moment'
import Button from 'react-bootstrap'

export default React.createClass({
  mixins: [Carousel.ControllerMixin],
  getInitialState() {
    return { slideIndex: 0, sliderVal: 0 }; },
  setSliderState(val) {
    this.setState({sliderVal: val});
    //console.log("setting sliderState: "+ val);
  },
  handleChange(e) {
    var oldSlider = this.state.sliderVal;
    var newSlider = e.target.value;
    //console.log('oldSLider: '+ oldSlider);
    if (newSlider > oldSlider) {
      this.refs.carousel.nextSlide();
    } else {
      this.refs.carousel.previousSlide();
    }
    this.setSliderState(newSlider);
  },
  render() {
    var carouselNodes = this.props.results.map(function(result) {
      var timeAgo =  moment(result.createdAt).fromNow();
      var caption = result.domain + " " + timeAgo;
      return ( <img src={result.originalImage} /> );
    });
    return (
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-9">
          <input type="range" min="0" max="7" value={this.state.sliderVal} onChange={(e)=>this.handleChange(e)}/>
            <Carousel
              ref="carousel"
              data={this.setCarouselData.bind(this, 'carousel')}
              slideIndex={this.state.slideIndex}
              afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}
              dragging={true} >
              {carouselNodes}
            </Carousel>
          </div>
          <div className="col-sm-3">
            <h3>This is meta data</h3>
          </div>
        </div> {/*row content*/}
      </div>
    )
  }
})
