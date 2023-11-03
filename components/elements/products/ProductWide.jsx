import React from 'react';
import Link from 'next/link';
import {
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';
import ModuleProductWideActions from '~/components/elements/products/modules/ModuleProductWideActions';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from 'react-redux';
import ModuleDetailShoppingActions from '../detail/modules/ModuleDetailShoppingActions';
import ModuleProductActions from './modules/ModuleProductActions';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const ProductWide = ({ product }) => {
    // const language = useSelector((state) => state.datas.language);
    const language = useLanguageHook();

    // const language = constants.language
    const priceView = StrapiProductPrice(product);

    return (
        <div className="ps-product ps-product--wide">
            <div className="ps-product__thumbnail" style={{padding:"1rem"}}>
                {StrapiProductThumbnail(product)}
            </div>
            <div
                className="ps-product__container"
                style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="ps-product__content">
                    <Link
                        href="/product/[pid]"
                        as={`/product/${product.slug_Id}`}>
                        <a className="ps-product__title">{product.Name}</a>
                    </Link>

                    <ul className="ps-product__desc">
                        <p>
                            {language === constants.Arabic
                                ? ReactHtmlParser(product.arabic_description)
                                : ReactHtmlParser(product.Description)}
                        </p>
                    </ul>
                </div>

                <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
                <div style={{position:"relative",top:"1.5rem"}}>{priceView}</div>
                <ModuleProductActions product={product} />


                </div>

                {/* <div style={{ position: 'relative', top: '1rem' }}> */}
                {/* </div> */}
                {/* <div style={{ position: 'relative', bottom: '1rem' }}> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default ProductWide;
