import React, { useState } from 'react';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LazyLoad from 'react-lazyload';

function BannerCards({ banners }) {
    const [itemCount, setItemCount] = useState(null);

    let bannerView;

    const img = new Image();
    img.onload = function () {
        if (this.width < 400) {
            setItemCount(2);
        } else {
            setItemCount(1);
        }
    };
    img.src =
        banners.length !== 0 &&
        `${constants.port}${banners[0].banner_appimage}`;

    if (itemCount !== null) {
        const responsive = {
            mobile: {
                breakpoint: { max: 576, min: 0 },
                items: itemCount,
            },
        };

        bannerView = (
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true}
                removeArrowOnDeviceType={['mobile']}
                itemClass="product-carousel__items">
                {banners.length !== 0 &&
                    banners.map((item, index) => {
                        return (
                            // <Link href={item.Banner_URL} key={index}>
                            <Link href='#' key={index}>
                                <a >
                                    <LazyLoad>
                                        <img
                                            src={`${constants.port}${item.banner_appimage}`}
                                        />
                                    </LazyLoad>
                                </a>
                            </Link>
                        );
                    })}
            </Carousel>
        );
    }

    return (
        itemCount !== null && (
            <>
                <div className="banner-cards" >
                    {banners.length !== 0 &&
                        banners.map((item, index) => {
                            return (
                                <Link href={item.Banner_URL} key={index}>
                                    <a>
                                        <LazyLoad>
                                            <img
                                                style={{ padding: '1rem',paddingTop:"0",paddingBottom:"0" }}
                                                src={`${constants.port}${item.banner_webimage}`}
                                            />
                                        </LazyLoad>
                                    </a>
                                </Link>
                            );
                        })}
                </div>

                <div className="banner-card-mobile">{bannerView}</div>
            </>
        )
    );
}

export default BannerCards;
