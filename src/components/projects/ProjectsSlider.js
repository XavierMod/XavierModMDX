import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import ProjectBlock from "./ProjectBlock";

const MainWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .slick-slider {
        height: 100%;
        width: 100%;

        div {
            height: 100%;
        }
    }

    .slick-track {
        height: 100% !important;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        transform: translate3d(0px, 0px, 0px)
    }

    .slick-slide {
        flex: 1;
        min-height: 60%;
        width: 100%;
    }


    .slick-list {
        height: 100% !important;
        overflow: hidden;
        width: 100%;
    }
`;

const Slide = styled.div`

`;

export default class Responsive extends Component {

  constructor(props) {
      super(props);
      this.state = {
          currentSlide: 0
      };
      this.slider = {};
  }
  componentDidMount(){
    let slickListDiv = document.getElementsByClassName('slick-list')[0]
    slickListDiv.addEventListener('wheel', event => {
      event.preventDefault()
      event.deltaY > 0 ? this.slider.slickPrev() : this.slider.slickNext()
    })
  }

  render() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        vertical: true,
        verticalSwiping: true,
        lazyLoad: true,
        speed: 1000,
        swipeToSlide: false,
        beforeChange: function(currentSlide, nextSlide) {
        },
        afterChange: (currentSlide) => {
            this.setState({currentSlide: currentSlide});
            console.log("after change", this.state.currentSlide);
        }
        
      };
    return (
      <MainWrapper>
        <Wrapper>
            <Slider ref={slider => this.slider = slider && slider['innerSlider']} {...settings}>
            {this.props.slides.map((el, ind) => {
                return (
                    <Slide key={el}>
                        <ProjectBlock 
                            data={el}
                            slideNumber={0}
                            currentSlide={this.state.currentSlide} />
                    </Slide>
                )
            })}
            </Slider>
        </Wrapper>
      </MainWrapper>
    );
  }
}