import React, { useContext } from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

import {
    StrapiProductBadge,
    StrapiProductDetailProductPrice,
    StrapiProductPrice,
} from '~/utilities/product-helper';

import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import { ShareDataContext } from '~/utilities/share-data-context';
import constants from '~/public/static/data/my-constants/Constants';
import { useSelector,useDispatch } from 'react-redux';
import { setProVarient } from '~/store/datas/action';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';


const Product = ({ product, key, hideThumbnails, productDetail }) => {
    const priceView = StrapiProductPrice(product);
    const thumbnailImage = StrapiProductThumbnail(product);
    const badgeView = StrapiProductBadge(product);
    const productDetailpriceView = StrapiProductDetailProductPrice(product);
    const { product_varient } = useContext(ShareDataContext);
    const [productVarient_, setProductVarient_] = product_varient;

    const datas = useSelector((state) => state.datas.language);
    const language = useLanguageHook();

    // const datas =    constants.language
    const dispatch = useDispatch()

    function setVarient(varient_slug) {
        setProductVarient_(varient_slug);
        dispatch(setProVarient(varient_slug))
    }

    function StrapiProductThumbnail(product) {
        let view;

        if (product.Thumbnail_image !== '') {
            view = (
                <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                    <a>
                        <LazyLoad>
                            <img
                                src={`${constants.port}${product.Thumbnail_image}`}
                                alt={
                                    language === constants['Arabic']
                                        ? product.arabic_translator
                                        : product.Name
                                }
                                onClick={() => setVarient(product.slug_Id)}
                            />
                        </LazyLoad>
                    </a>
                </Link>
            );
        } else {
            view = (
                <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                    <a>
                        <LazyLoad>
                            <img
                                src="/static/img/not-found.jpg"
                                alt={constants.ZAINBAY}
                                onClick={() => setVarient(product.slug_Id)}
                            />
                        </LazyLoad>
                    </a>
                </Link>
            );
        }

        return view;
    }

    return (
        <div className="ps-product ps-product__hover" >
            <div className="ps-product__thumbnail">
                <div style={{position:'absolute',top:"0%",right:"0",zIndex:"10"}}>{badgeView}</div>
                {thumbnailImage}
                
                <ModuleProductActions product={product} />
            </div>

            {!hideThumbnails && (
                <>
                    <div className="ps-product__container">
                        <div
                            className="ps-product__content"
                            style={{
                                textAlign:
                                language === constants['Arabic']
                                        ? 'right'
                                        : 'left',
                            }}
                            onClick={() => setVarient(product.slug_Id)}>
                            <Link
                                href="/product/[pid]"
                                as={`/product/${product.slug_Id}`}>
                                <a className="ps-product__title" style={{fontWeight:"600",marginTop:"1rem"}}>
                                    {language === constants['Arabic']
                                        ? product.arabic_translator
                                        : product.Name}
                                </a>
                            </Link>
                            {productDetail ? productDetailpriceView : priceView}
                        </div>
                        <div
                            className="ps-product__content hover"
                            style={{
                                textAlign:
                                language === constants['Arabic']
                                        ? 'right'
                                        : 'left',
                            }}
                            onClick={() => setVarient(product.slug_Id)}>
                            <Link
                                href="/product/[pid]"
                                as={`/product/${product.slug_Id}`}>
                                <a className="ps-product__title" style={{fontWeight:"600",marginTop:"1rem"}}>

                                    {language === constants['Arabic']
                                        ? product.arabic_translator
                                        : product.Name}
                                </a>
                            </Link>
                            {/* {priceView} */}

                            {productDetail ? productDetailpriceView : priceView}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;
