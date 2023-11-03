import React from 'react';
import Slider from 'react-slick';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Labels } from '~/public/static/data/my-constants/Labels';
import Constants from '~/public/static/data/my-constants/Constants';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

import RecentlyProductCard from '~/components/elements/products/RecentlyProductCard';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const RecentlyViewedProduct = ({ products }) => {
    const carouselStandard = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 7,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    infinite: true,

                    slidesToScroll: 1,
                },
            },
        ],
    };


    const datas = useSelector((state) => state.datas.language);
    const language = useLanguageHook();

    // const datas = constants.language
    const labels = Labels(language);

    

    let productItemsView, linksView;
    if (products.length > 0) {
        const slideItems = products.map((item) => (
            <RecentlyProductCard product={item} key={item.id} />
        ));
        productItemsView = (
            <Slider
                {...carouselStandard}
                arrows={false}
              
                infinite={false}
                className="ps-carousel outside"
                >
                {slideItems}
               
            </Slider>
        );
    } else {
        productItemsView = <p>{labels['No product found']}</p>;
    }

    return (
        <div className="ps-product-list"  >
            <div className="container">
                <div className="ps-section__header" >
                    {language === Constants['English'] ? (
                        <>
                            <h3>Recently Viewed Products</h3>
                        </>
                    ) : (
                        <>
                            <h3>المنتجات المعروضة مؤخرا</h3>
                        </>
                    )}
                </div>
                <div className="ps-section__content" style={{paddingTop:"10px"}}>{productItemsView}</div>
            </div>
        </div>
    );
};
export default RecentlyViewedProduct;
