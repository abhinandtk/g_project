import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import { baseUrl } from '~/repositories/Repository';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import constants from '~/public/static/data/my-constants/Constants';
import { useSelector } from 'react-redux';

import moment from 'moment';
const ThumbnailDefault = ({product,  vertical = true, language }) => {
    const galleryCarousel = useRef(null);
    const variantCarousel = useRef(null);
    const [gallery, setGallery] = useState(null);
    const [variant, setVariant] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [productImages, setProductImages] = useState([]);
    const prVarientId = useSelector((state) => state.datas.proVarient);



    const handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        setPhotoIndex(imageIndex);
        setIsOpen(true);
    };

    useEffect(() => {
       
        let thumbnail_images = []
        product.Product_Items.map((item, index) => {
            if (item.multivarient.length !== 0) {
                item.multivarient.map((item_, index_) => {
                    if (item_.slug_id === prVarientId && item_.Thumbnail_images.length !==0 ) {
                      let images = [];
                      item_.Thumbnail_images.map((item) => {
                          images.push(`${constants.port}${item.Images}`);
                      });
                      setProductImages(images);
                    }
                  })
            }else{
                if (item.slug_id === prVarientId && item.Thumbnail_images.length !==0 ) {
                    let images = [];
                    item.Thumbnail_images.map((item) => {
                        images.push(`${constants.port}${item.Images}`);
                    });
                    setProductImages(images);
                  }
                
            }

        })
            // item.multivarient.length !== 0
            //     ? item.multivarient.map((item_, index_) => {
            //           if (item_.slug_id === prVarientId && item_.thumbnail_images.length !==0 ) {
            //             // thumbnail_images = item_.Thumbnail_images
            //             let images = [];
            //             item_.thumbnail_images.map((item) => {
            //                 images.push(`${constants.port}${item.Images}`);
            //             });
            //             setProductImages(images);
            //           }
            //         }):thumbnail_images = item.Thumbnail_images
            //     })



        
        // if (
        //     (thumbnail_images != [] || thumbnail_images != null) &&
        //     thumbnail_images.length > 0
        // ) {
        //     thumbnail_images.map((item) => {
        //         images.push(`${constants.port}${item.Images}`);
        //     });
        //     setProductImages(images);
        // }
        setGallery(galleryCarousel.current);
        setVariant(variantCarousel.current);
    }, [product, prVarientId]);

    const gallerySetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const variantSetting = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
        ],
    };

    //Views
    const currentDate = () => {
        var today,dd,mm,yyyy;
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth()+1;
        yyyy = today.getFullYear();
        return yyyy + "-" + mm +"-"+ dd;
      }
    let warrantyMonth = moment(product.Product_Items[0].warranty_date).diff(currentDate(), 'months')

    let lightboxView, variantCarouselView, imagesView, galleryImagesView;
    if (productImages.length > 0) {
        imagesView = productImages.map((item) => (
            <div className="item" key={item}>
                <img src={item} alt={product.Name} title={product.name} />
            </div>
        ));
        galleryImagesView = productImages.map((item, index) => (
            
            <div className="item" key={item}>
                {product.Product_Items[0].is_refurbished ? 
                <div className='product_detail_refurbished'>
                    <img src='/static/img/ic_refurbrished.png' width="40px" />
                </div> : <></>}

                {product.Product_Items[0].is_gava_plus ? 
                <div className='product_detail_gavaplus'>
                    <img src='/static/img/ic_gava_plus.png' width="70px" />
                </div> : <></>}
                {warrantyMonth>=1 ? (
                <div className='product_detail_warranty'>
                <span style={{fontSize:"12px",fontWeight:"1000"}}>{warrantyMonth}</span><br></br>Months<br></br>Warranty
                </div>):<></>}

                <a href="#" onClick={(e) => handleOpenLightbox(e, index)}>                    
                    <img src={item} alt={product.Name} title={product.name} />
                </a>
            </div>
        ));
    }
    if (vertical) {
        variantCarouselView = (
            <Slider
                asNavFor={gallery}
                ref={(slider) => (variantCarousel.current = slider)}
                swipeToSlide={true}
                arrows={false}
                slidesToShow={3}
                vertical={true}
                infinite={false}
                focusOnSelect={true}
                {...variantSetting}
                className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    } else {
        variantCarouselView = (
            <Slider
                asNavFor={gallery}
                ref={(slider) => (variantCarousel.current = slider)}
                swipeToSlide={true}
                arrows={false}
                slidesToShow={6}
                vertical={false}
                centered={true}
                infinite={false}
                focusOnSelect={true}
                className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    }
    if (isOpen) {
        lightboxView = (
            <Lightbox
                mainSrc={productImages[photoIndex]}
                nextSrc={productImages[(photoIndex + 1) % productImages.length]}
                prevSrc={
                    productImages[
                        (photoIndex + productImages.length - 1) %
                            productImages.length
                    ]
                }
                onCloseRequest={() => {
                    setIsOpen(false);
                }}
                onMovePrevRequest={() => {
                    setPhotoIndex(
                        (photoIndex + productImages.length - 1) %
                            productImages.length
                    );
                }}
                onMoveNextRequest={() => {
                    setPhotoIndex((photoIndex + 1) % productImages.length);
                }}
            />
        );
    }

    return (
        <div
            className="ps-product__thumbnail"
            data-vertical={vertical ? 'true' : 'false'}>
            {language === constants.Arabic ? (
                <>
                {variantCarouselView}
                    <figure>
                        <div className="ps-wrapper">
                            <Slider
                                {...gallerySetting}
                                ref={(slider) =>
                                    (galleryCarousel.current = slider)
                                }
                                asNavFor={variant}
                                className="ps-product__gallery ps-carousel inside">
                                {galleryImagesView}
                            </Slider>
                        </div>
                    </figure>
                    
                </>
            ) : (
                <>
                    <figure>
                        <div className="ps-wrapper">
                            <Slider
                                {...gallerySetting}
                                ref={(slider) =>
                                    (galleryCarousel.current = slider)
                                }
                                asNavFor={variant}
                                className="ps-product__gallery ps-carousel inside">
                                {galleryImagesView}
                            </Slider>
                        </div>
                    </figure>
                    {variantCarouselView}
                </>
            )}

            {lightboxView}
        </div>
    );
};

export default ThumbnailDefault;
