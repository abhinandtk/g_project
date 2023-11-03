import { Card, Col, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { StrapiProductThumbnail } from '~/utilities/product-helper';

function WishlistCardsSmallScreen({
    handleAddItemToCart,
    product,
    handleRemoveWishListItem,
    language
}) {
    const labels = Labels(language)
    return (
        <div className="product-table-small-card">
            <>
                <Card
                    bordered={false}
                    className="col-md-12 table-product-small-card"
                    style={{
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    }}>
                    <a
                        href="#"
                        onClick={(e) => {
                            handleRemoveWishListItem(product.slug_Id);
                            e.preventDefault();
                        }}>
                        <i className="icon-cross"></i>
                    </a>
                    <div
                        style={{
                            width: '100px',
                            height: '100px',
                        }}>
                        {StrapiProductThumbnail(product)}
                    </div>
                    <Link
                        href="/product/[pid]"
                        as={`/product/${product.slug_Id}`}>
                        <a
                            className="table-product-small-card__title ellips_text"
                            style={{ fontSize: '18px' }}>
                            {language === constants.English ? product.Name:product.arabic_name}{' '}
                        </a>
                    </Link>
                    <Typography style={{ fontSize: '16px',marginTop:"1rem",marginBottom:"1rem" }}>
                        ₹ {product.cut_prize}
                    </Typography>
                    <div className="form-group--number">
                        <a
                            className="ps-btn"
                            href=""
                            onClick={(e) => {
                                handleAddItemToCart(product.slug_Id);
                                e.preventDefault();
                            }}>
                                                       {labels['Add to cart']}

                            
                        </a>
                    </div>
                    <Col className="gutter-row" span={12}></Col>
                </Card>
            </>
        </div>
    );
}

export default WishlistCardsSmallScreen;
