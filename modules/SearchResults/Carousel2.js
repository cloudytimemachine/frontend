import React from 'react'
import Carousel from 'nuka-carousel'
import moment from 'moment'

export default React.createClass({
  mixins: [Carousel.ControllerMixin],
  getInitialState() {
    return {  finished: false,
              slideIndex: 0,
              sliderVal: 0,
              sliderMin: 0,
              sliderMax: 0,
              leftLabel: 0,
              rightLabel: 0 }
  },
  setSliderState(val) {
    this.setState({slideIndex: val});
    console.log("setting slideIndex: "+ val);
  },
  handleChange(e) {
    var oldSlider = this.state.sliderVal;
    var newSlider = e.target.value;
    if (newSlider > oldSlider) {
      this.refs.carousel.nextSlide();
    } else {
      this.refs.carousel.previousSlide();
    }
    this.setSliderState(newSlider);
  },
  getMetaData() {
    if (this.state.finished) {
      let data = this.props.results[this.state.slideIndex];

      let timeAgo =  moment(data.createdAt).fromNow();
      return (
            <div className="meta-information">
            <dl>
              <dt>ID:</dt><dd> {data.id} </dd>
              <dt>Created:</dt><dd> {timeAgo} </dd>
              <dt>Host:</dt><dd> {data.host}</dd>
              <dt>Req'd Url:</dt><dd> {data.requestedUrl}</dd>
            </dl>
            </div>);
    }
    else return (<div>Loading</div>);
  },
  componentWillReceiveProps: function(nextprops) {
    this.initializeSlider(nextprops);
  },
  initializeSlider: function(p) {
    console.log('initializing slider with new data from nextprops');
    let sliderMin = 0;
    let length = p.results.length;
    console.log(`length: ${length}`);
    let sliderMax = length-1;
    console.log(`sliderMax: ${sliderMax}`);
    let leftlabel = moment(p.results[0].createdAt).fromNow();
    console.log(`leftLabel: ${leftlabel}`);
    let rightlabel = moment(p.results[length-1].createdAt).fromNow();
    console.log(`rightLabel: ${rightlabel}`);
    this.setState({  finished: true,
            slideIndex: sliderMax,
            sliderMin: sliderMin,
            sliderMax: sliderMax,
            leftLabel: leftlabel,
            rightLabel: rightlabel });
  },
  render() {
    var carouselNodes = this.props.results.map(function(result) {
      return ( <img key={result.id} src={result.originalImage} onLoad={() => {window.dispatchEvent(new Event('resize'));}} /> );
    });
    var Decorators = [{
      component: React.createClass({
        render() {
          return ( null );
        }
      }),
    }];
    return (
          <div>
          <div className="capture-details">
          <fieldset>
            <input type="range" min={this.state.sliderMin} max={this.state.sliderMax} value={this.state.slideIndex} onChange={(e)=>this.handleChange(e)}/>
            <label className="leftlabel pull-left">{this.state.leftLabel}</label>
            <label className="rightlabel pull-right">{this.state.rightLabel}</label>
          </fieldset>
          <Carousel
            ref="carousel"
            decorators={Decorators}
            data={this.setCarouselData.bind(this, 'carousel')}
            slideIndex={parseInt(this.state.slideIndex)}
            afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}
            dragging={false}>
            {carouselNodes}
          </Carousel>
          </div>
          {this.getMetaData()}
          </div>
    )
  }
})
