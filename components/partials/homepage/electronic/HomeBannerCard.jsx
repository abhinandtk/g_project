import React, { useState } from 'react';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LazyLoad from 'react-lazyload';

function HomeBannerCard({ banners }) {
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
                {/* {banners.length !== 0 &&
                    banners.map((item, index) => {
                        return ( */}
                            {/* <Link href={item.Banner_URL} key={index}> */}
                            <Link href="/service">
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px" }}
                                                src="static/img/home_bannercard/gadgetRenovation.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <p>Repair Service</p>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>
                                <Link href="/shop?category=gava-plus-1">
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px" }}
                                                src="static/img/home_bannercard/refurbished.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <p>Gava Plus</p>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>
                                <Link href="/shop?category=genuine-accessories-3">
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px" }}
                                                src="static/img/home_bannercard/genuineAcces.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <p>Genuine Accessories</p>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>
                                <Link href="/sell">
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px" }}
                                                src="static/img/home_bannercard/sellGadgets.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <p>Sell Your Products</p>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>
                        {/* );
                    })} */}
            </Carousel>
        );
    }

    return (
        // itemCount !== null && (
            <>
                <div className="banner-cards" style={{paddingTop:"0"}} >
                    {/* {banners.length !== 0 && */}
                        {/* banners.map((item, index) => { */}
                            {/* return ( */}
                                <>
                                {/* <Link href={item.Banner_URL} key={index}> */}
                                <Link href="/service" style={{width:"25%"}}>
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px",width:"100%" }}
                                                src="static/img/home_bannercard/gadgetRenovation.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <p>Repair Service</p>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>
                                <Link href="/shop?category=gava-plus-1" style={{width:"25%"}}>
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px",width:"100%" }}
                                                src="static/img/home_bannercard/refurbished.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <div>
                                                <p>Gava Plus</p>
                                                <p style={{fontSize:"2vw",margin:"0px",lineHeight:"120%"}}>Refurbished Mobile Phones</p>
                                                </div>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>
                                <Link href="/shop?category=genuine-accessories-3" style={{width:"25%"}}>
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px",width:"100%" }}
                                                src="static/img/home_bannercard/genuineAcces.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <p>Genuine Accessories</p>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>
                                <Link href="/sell" style={{width:"25%"}}>
                                    <a>
                                        <LazyLoad>
                                            <figure className='banner-card-details'>
                                            <img
                                                style={{padding:"0px",width:"100%" }}
                                                src="static/img/home_bannercard/sellGadgets.jpg"
                                            />
                                            {/* <figcaption className='home-card-content'>
                                                <p>Sell Your Products</p>
                                            </figcaption> */}
                                            </figure>
                                        </LazyLoad>
                                    </a>
                                </Link>


                                </>
                            {/* ); */}
                        {/* })} */}
                </div>

                <div className="banner-card-mobile">{bannerView}</div>
            </>
        )
    // );
}

export default HomeBannerCard;
