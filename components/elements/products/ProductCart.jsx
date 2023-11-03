import React, { useState } from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
import { Col, Modal, Space, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import ProductReview from './ProductReview';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';

const ProductCart = ({ product, myOrder ,language}) => {
    const [isReview, setIsReview] = useState(false);
    const handleShowReviewView = (e) => {
        setIsReview(true);
    };


    const handleHideReviewView = (e) => {
        setIsReview(false);
    };


    const labels = Labels(language)
    return (
        <div className="ps-product--cart" style={{maxWidth:"500px"}}>
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                    <a className="ps-product__title ellips_text" >{language === constants.English ?product.Name: product.arabic_name} </a>
                </Link>
                {myOrder && (
                    <Col className="gutter-row" span={18}>
                        {/* <div
                            className="my-order__rate-and-review-text"
                            onClick={() => handleShowReviewView()}>
                        <StarOutlined
                                title="Rate and Review"
                                aria-label="Rate and Review"
                            />{' '}
                            <span
                                style={{ position: 'relative', top: '0.3rem' }}>
                                 {labels['Rate and Review']}
                            </span>
                        </div> */}
                    </Col>
                )}
            </div>

            <Modal
                centered
                footer={null}
                width={700}
                onCancel={(e) => handleHideReviewView(e)}
                visible={isReview}
                closeIcon={<i className="icon icon-cross2"></i>}>
                <h3 style={{ textAlign: 'center' }}>{labels['Rate and Review']}</h3>
                <ProductReview language={language} slug_id={product.slug_Id} hideReviewModal={setIsReview} />
            </Modal>
        </div>
    );
};

export default ProductCart;
