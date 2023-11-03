import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import labels, { Labels } from '~/public/static/data/my-constants/Labels';
import { showNotification } from './common-helpers';
import { useSelector } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { updateNavbar } from '~/store/datas/action';



export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    if (collections.length > 0) {
        const result = collections.find(
            (item) => item.slug === slug.toString()
        );
        if (result !== undefined) {
            return result.products;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getItemBySlug(banners, slug) {
    if (banners.length > 0) {
        const banner = banners.find((item) => item.slug === slug.toString());
        if (banner !== undefined) {
            return banner;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function convertSlugsQueryString(payload) {
    let query = '';
    if (payload.length > 0) {
        payload.forEach((item) => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
    }
    return query;
}

export function StrapiProductBadge(product,language) {
    let view;

    const labels = Labels(language);


    if (product.cut_prize !== null) {
        if (parseInt(product.cut_prize) < parseInt(product.actual_prize)) {
        }
        return (
            Math.round(
                100 -
                    (parseInt(product.cut_prize) /
                        parseInt(product.actual_prize)) *
                        100
            ) > 5 && <div className="offer-percentage__badge">
            <p>
                {product.coming_soon == "Yes" ? <></> : (                
                    (view =  `${Math.round(
                        100 -
                            (parseInt(product.cut_prize) /
                                parseInt(product.actual_prize)) *
                                100 
                    )}${ labels[' % off']} `)
                
                )}
                </p>
            </div>
        );
    } else if (product.ProductStock < 1) {
        view = labels['out of stock'];
    } else {
        view = null;
    }

    return view;
}

export function StrapiProductPrice(product) {
    let view;
    if (product.cut_prize !== null) {
        view = (
            <div className="ps-product-prices">
                <p className="ps-product__price sale">
                ₹ {formatCurrency(product.cut_prize)}{' '}
                </p>
                <p className="ps-product__actual-price">
                   {formatCurrency(product.actual_prize)}
                    
                </p>
            </div>

        );
    } else {
        view = (
            <p className="ps-product__price">
                ₹ {formatCurrency(product.cut_prize)}
            </p>
        );
    }
    return view;
}

export function StrapiProductPrice1(product,language) {
    let view;
    if (product.cut_prize !== null) {
        view = (
            
            <div className='product-card-price-and-rating' style={{alignItems:language=== constants.Arabic && "end"}}>
                <div className='first-div'>
                    <span>₹ {formatCurrency(product.cut_prize)}</span><br/>
                </div>
                <div  style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}} >
                {/* {
                    product.actual_prize>product.cut_prize
                    ?<span style={{textDecoration:"line-through"}}> ₹ {formatCurrency(product.actual_prize)} </span>
                    :<span style={{textDecoration:"line-through"}}></span>
                }                 */}
                <div className='rating-parent'>
                {(product.product_rating !== null && product.product_rating !== 0 ) && (
                    <>
                        <p className='rating-count' >{product.product_rating }</p>
                        <p style={{marginTop:"-0.3rem"}}><StarOutlined style={{fontWeight:"bold", color:"white",paddingRight:"0.5rem"}}/></p>
                        </>
                        )}
                        </div>
                    </div>
            </div>
        );
    } else {
        view = (
            <p className="ps-product__price">
                ₹ {formatCurrency(product.cut_prize)}
            </p>
        );
    }
    if (product.coming_soon == "Yes"){
        view=(

            <p className="ps-product__price">
            Coming Soon..
            </p>

        )
        
    }

    return view;
}

export function StrapiProductDetailProductPrice(product) {
    let view;
    if (product.cut_prize !== null) {
        view = (
            <div className="ps-product-prices">
                <p className="ps-product__price sale">
                    ₹ {formatCurrency(product.cut_prize)}
                </p>
                <p className="ps-product__actual-price">
                    {' '}
                    {formatCurrency(product. actual_prize)}{' '}
                </p>
            </div>
        );
    } else {
        view = (
            <p className="ps-product__price">
                ₹ {formatCurrency(product.cut_prize)}
            </p>
        );
    }
    return view;
}

export function StrapiProductPriceExpanded(product) {
    let view;
    if (product.is_sale === true) {
        view = (
            <p className="ps-product__price sale">
                ₹ {formatCurrency(product.price)}
                <del className="ml-2 ">
                    {formatCurrency(product.sale_price)}
                </del>
                <small>18% off</small>
            </p>
        );
    } else {
        view = (
            <p className="ps-product__price">
                ₹ {formatCurrency(product.price)}
            </p>
        );
    }
    return view;
}

export function StrapiProductThumbnail(product) {
    
    let view;
    if (product.Thumbnail_image !== '') {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${constants.port}${product.Thumbnail_image}`}
                            alt={product.Name}
                            title={product.Name}
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
                            title={constants.ZAINBAY}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}

export function cartPrVarients(prVarient) {
    let product_varients = [];

    // let view;

    if (localStorage.getItem('productVariantId') === null) {
        product_varients = [prVarient];
    } else {
        product_varients = [
            ...JSON.parse(localStorage.getItem('productVariantId')),
            prVarient,
        ];
    }

    // return view;
    return product_varients;
}

export function cartPrVarientQuantity(quantityCount) {
    // let view;
    let quantity = [];

    if (localStorage.getItem('quantity') === null) {
        quantity = [quantityCount.toString()];
    } else {
        quantity = [
            ...JSON.parse(localStorage.getItem('quantity')),
            quantityCount.toString(),
        ];
    }
    return quantity;

    // return view;
}

export function addToGuestCart(varientId, quantityCount,language) {
    // const language = constants.English
    const labels = Labels(language);

    let view,
        quantity = [],
        product_varients = [];
    if (localStorage.getItem('productVariantId') !== null) {
        if (
            JSON.parse(localStorage.getItem('productVariantId')).indexOf(
                varientId
            ) !== -1
        ) {
            let position = JSON.parse(
                localStorage.getItem('productVariantId')
            ).indexOf(varientId);
            let quantity = JSON.parse(localStorage.getItem('quantity'));
            let updatedQuantity_ =
                parseInt(
                    JSON.parse(localStorage.getItem('quantity'))[position]
                ) + parseInt(quantityCount);
            quantity[position] = String(updatedQuantity_);
            localStorage.setItem('quantity', JSON.stringify(quantity));
        } else {
            if (localStorage.getItem('quantity') === null) {
                quantity = [quantityCount.toString()];
            } else {
                quantity = [
                    ...JSON.parse(localStorage.getItem('quantity')),
                    quantityCount.toString(),
                ];
            }

            if (localStorage.getItem('productVariantId') === null) {
                product_varients = [varientId];
            } else {
                product_varients = [
                    ...JSON.parse(localStorage.getItem('productVariantId')),
                    varientId,
                ];
            }

            localStorage.setItem(
                'productVariantId',
                JSON.stringify(product_varients)
            );
            localStorage.setItem('quantity', JSON.stringify(quantity));
        }
    } else {
        if (localStorage.getItem('quantity') === null) {
            quantity = [quantityCount.toString()];
        } else {
            quantity = [
                ...JSON.parse(localStorage.getItem('quantity')),
                quantityCount.toString(),
            ];
        }

        if (localStorage.getItem('productVariantId') === null) {
            product_varients = [varientId];
        } else {
            product_varients = [
                ...JSON.parse(localStorage.getItem('productVariantId')),
                varientId,
            ];
        }

        localStorage.setItem(
            'productVariantId',
            JSON.stringify(product_varients)
        );
        localStorage.setItem('quantity', JSON.stringify(quantity));
    }

    // dispatch(updateNavbar(true));


    const notification = showNotification(language,constants.Success, labels['Added to cart']);

    return notification;
}
