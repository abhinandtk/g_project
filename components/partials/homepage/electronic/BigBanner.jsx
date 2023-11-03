import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import { PrevArrowMainBanner } from '~/components/elements/carousel/PrevArrow';
import { NextArrowMainBanner } from '~/components/elements/carousel/NextArrow';
import LazyLoad from 'react-lazyload';
import { useWindowSize } from './ElectronicProductGroupWithCarousel';
import AutoPlayMethods from './AutoPlayBanners';

function BigBanner({ banners }) {
    // const carouselSettings = {
    //     dots: false,
    //     arrows: true,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     infinite: true,

    //     nextArrow: <NextArrowMainBanner />,
    //     prevArrow: <PrevArrowMainBanner />,
    // };

    // const [width, height] = useWindowSize();


    return (
        <section
            className="ps-home-banner"
            style={{ paddingTop: '0', paddingBottom: '0' }}>
            {banners.length !== 0 && (
                <AutoPlayMethods source={banners}/>
                // <Slider {...carouselSettings}>
                //     {banners.map((item, index) => {
                //         return (
                //             <Link href={item.Banner_URL} key={index}>
                //                 <a>
                //                     <LazyLoad>
                //                         <img
                //                             src={`${constants.port}${width > 576 ?  item. banner_webimage: item. banner_appimage}`}
                //                             style={{ width: '100%' }}
                //                         />
                //                     </LazyLoad>
                //                 </a>
                //             </Link>
                //         );
                //     })}
                // </Slider>
            )}
        </section>
    );
}

export default BigBanner;
