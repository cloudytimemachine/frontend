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
  getMetaData() {
    let data = this.props.results[this.state.sliderVal];
    let timeAgo =  moment(data.createdAt).fromNow();
    return ( <div>
                <h3> {data.domain} : {timeAgo}</h3>
                <h4>Capture ID: {data.id} </h4>
              </div> );
  },
  render() {
    var carouselNodes = this.props.results.map(function(result) {
      return ( <img key={result.id} src={result.originalImage} /> );
    });
    var Decorators = [{
      component: React.createClass({
        render() {
          return ( null );
        }
      }),

    }];

    return (
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-9">
          <input type="range" min="0" max="7" value={this.state.sliderVal} onChange={(e)=>this.handleChange(e)}/>
            <Carousel
              ref="carousel"
              decorators={Decorators}
              data={this.setCarouselData.bind(this, 'carousel')}
              slideIndex={this.state.slideIndex}
              afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
              {carouselNodes}
            </Carousel>
          </div>
          <div className="col-sm-3">
            {this.getMetaData()}
          </div>
        </div> {/*row content*/}
      </div>
    )
  }
})
