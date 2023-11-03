import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

function ElectronicBanner({ mainBanner, smallBanner, isLoading_ }) {
    const carouselSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const datas = useSelector((state) => state.datas.language);
    const language = useLanguageHook();

    // const datas = constants.language

    return (
        <section className="ps-home-banner">
            <div className="container">


                {language === constants['English'] ? (
                    isLoading_ ? (
                        <>
                            <div className="ps-section__left">
                                <Slider {...carouselSettings}>
                                    <div
                                       >
                                        <Link href="/shop">
                                            <a>
                                                <img
                                                    src="/static/img/slider/home-7/1.jpg"
                                                    alt="martfury"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </Slider>


                            </div>
                            <div className="ps-section__right">
                                <Link href="/shop">
                                    <a className="ps-collection">
                                        <img
                                            src="/static/img/slider/home-7/promotion-1.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                                <Link href="/shop">
                                    <a className="ps-collection">
                                        <img
                                            src="/static/img/slider/home-7/promotion-2.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            {' '}
                            <div className="ps-section__left">
                                <Slider {...carouselSettings}>
                                    <div
                                        className=""
                                        style={{ border: '1px solid pink' }}>
                                        <Link href="/shop">
                                            <a>
                                                <img
                                                    src="/static/img/slider/home-7/1.jpg"
                                                    alt="martfury"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </Slider>
                            </div>
                            <div className="ps-section__right">
                                <Link href="/shop">
                                    <a className="ps-collection">
                                        <img
                                            src="/static/img/slider/home-7/promotion-1.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                                <Link href="/shop">
                                    <a className="ps-collection">
                                        <img
                                            src="/static/img/slider/home-7/promotion-2.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </>
                    )
                ) : isLoading_ ? (
                    <>
                        <div className="ps-section__right">
                            <Link href="/shop">
                                <a className="ps-collection">
                                    <img
                                        src="/static/img/slider/home-7/promotion-1.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                            <Link href="/shop">
                                <a className="ps-collection">
                                    <img
                                        src="/static/img/slider/home-7/promotion-2.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className="ps-section__left arabic-ps-home-banner__left">
                            <Slider {...carouselSettings}>
                                <div className="item">
                                    <Link href="/shop">
                                        <a>
                                            <img
                                                src="/static/img/slider/home-7/1.jpg"
                                                alt="martfury"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </Slider>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="ps-section__right">
                            <Link href="/shop">
                                <a className="ps-collection">
                                    <img
                                        src="/static/img/slider/home-7/promotion-1.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                            <Link href="/shop">
                                <a className="ps-collection">
                                    <img
                                        src="/static/img/slider/home-7/promotion-2.jpg"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className="ps-section__left arabic-ps-home-banner__left">
                            <Slider {...carouselSettings}>
                                <div className="item">
                                    <Link href="/shop">
                                        <a>
                                            <img
                                                src="/static/img/slider/home-7/1.jpg"
                                                alt="martfury"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </Slider>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default ElectronicBanner;
