import React, { useContext } from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import constants from '~/public/static/data/my-constants/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { setProVarient } from '~/store/datas/action';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const RecentlyProductCard = ({ product }) => {
    const thumbnailImage = StrapiProductThumbnail(product);

    const datas = useSelector((state) => state.datas.language);
    const language = useLanguageHook();

    // const datas = constants.language
    const dispatch = useDispatch();

    function setVarient(varient_slug) {
        setProductVarient_(varient_slug);
        dispatch(setProVarient(varient_slug));
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
        <div className="ps-product">
            <div className="ps-product__thumbnail">{thumbnailImage}</div>
        </div>
    );
};

export default RecentlyProductCard;
