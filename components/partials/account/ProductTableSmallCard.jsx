import { StarOutlined } from '@ant-design/icons';
import { Card, Col, Modal, Typography } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import ProductReview from '~/components/elements/products/ProductReview';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { StrapiProductThumbnail } from '~/utilities/product-helper';

function ProductTableSmallCard({ products,language }) {
    const [isReview, setIsReview] = useState(false);
    const handleShowReviewView = (e) => {
        setIsReview(true);
    };

    const handleHideReviewView = (e) => {
        setIsReview(false);
    };
    const labels = Labels(language)

    return (
        <div className="product-table-small-card">
            <>
                {products.map((product) => (
                    <>
                        <Card
                            bordered={false}
                            className="col-md-12 table-product-small-card"
                            style={{
                                // border: '1px solid blue',
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                            }}>
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
                                    className="table-product-small-card__title"
                                    style={{ fontSize: '18px' }}>
                                    {language === constants.Arabic ? product.arabic_name:product.Name} 
                                </a>
                            </Link>
                            <Typography style={{ fontSize: '16px' }}>
                                ₹ {product.amount} x {product.count}
                            </Typography>
                            <Typography style={{ fontSize: '16px' }}>
                                ₹{' '}
                                {parseInt(product.amount) *
                                    parseInt(product.count)}
                            </Typography>
                            <Col className="gutter-row" span={12}>
                                <div
                                    className="my-order__rate-and-review-text"
                                    onClick={() => handleShowReviewView()}>
                                    <StarOutlined
                                        title="Rate and Review"
                                        aria-label="Rate and Review"
                                    />{' '}
                                    <span
                                        style={{
                                            position: 'relative',
                                            top: '0.3rem',
                                        }}>
                                            {labels['Rate and Review']}
                                    </span>
                                </div>
                            </Col>
                        </Card>

                        <Modal
                            centered
                            footer={null}
                            width={700}
                            onCancel={(e) => handleHideReviewView(e)}
                            visible={isReview}
                            closeIcon={<i className="icon icon-cross2"></i>}>
                            <h3 style={{ textAlign: 'center' }}>
                            {labels['Rate and Review']}

                            </h3>
                            <ProductReview
                                language={language}
                                slug_id={product.slug_Id}
                                hideReviewModal={setIsReview}
                            />
                        </Modal>
                    </>
                ))}
            </>
        </div>
    );
}

export default ProductTableSmallCard;
