import React from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
import constants from '~/public/static/data/my-constants/Constants';


const ProductOnCart = ({index, product, removeCart,language }) => {


    

    return (
        <div className="ps-product--cart-mobile" key={{index}}>
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <a
                    className="ps-product__remove"
                    onClick={(e) =>
                        removeCart(
                            e,
                            product.slug_Id,
                            parseInt(product.cut_prize) *
                                parseInt(product.quantity),
                            index
                        )
                    }>
                    <i className="icon-cross"></i>
                </a>
                <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                    <a className="ps-product__title ps-product__title-ellips">
                        {language === constants.English ?product.Name :product.arabic_name}
                    </a>
                </Link>
                <p>
                    <small>
                        ₹ {product.cut_prize} x {product.quantity}
                    </small>
                </p>
            </div>
        </div>
    );
};

export default ProductOnCart;
