import React from 'react'
import Carousel from 'nuka-carousel'
import moment from 'moment'
import Button from 'react-bootstrap'

export default React.createClass({
  mixins: [Carousel.ControllerMixin],
  getInitialState() {
    let sliderMin = 0;
    let length = this.props.results.length;
    let sliderMax = length-1;
    let leftlabel = moment(this.props.results[0].createdAt).fromNow();
    let rightlabel = moment(this.props.results[length-1].createdAt).fromNow();
    return {  slideIndex: 0,
              sliderVal: 0,
              sliderMin: sliderMin,
              sliderMax: sliderMax,
              leftLabel: leftlabel,
              rightLabel: rightlabel  };
  },
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
          <fieldset>

            <input type="range" min={this.state.sliderMin} max={this.state.sliderMax} value={this.state.sliderVal} onChange={(e)=>this.handleChange(e)}/>
          <label className="leftlabel pull-left">{this.state.leftLabel}</label>
          <label className="rightlabel pull-right">{this.state.rightLabel}</label>
          </fieldset>

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
