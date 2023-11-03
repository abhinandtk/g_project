import Link from "next/link";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import React, { Component } from "react";
import constants from '~/public/static/data/my-constants/Constants';
import { NextArrowMainBanner } from "~/components/elements/carousel/NextArrow";
import { PrevArrowMainBanner } from "~/components/elements/carousel/PrevArrow";

export default class AutoPlayMethods extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 18000,
      nextArrow: <NextArrowMainBanner />,
      prevArrow: <PrevArrowMainBanner />
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {this.props.source.map((item, index) => {
            return (
              <Link href={item.Banner_URL} key={index}>
                <a>
                  <LazyLoad>
                    <img
                      src={`${constants.port}${window.innerWidth > 576 ? item.banner_webimage : item.banner_appimage}`}
                      style={{ width: '100%' }}
                    />
                  </LazyLoad>
                </a>
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}