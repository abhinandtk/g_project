import { StarOutlined } from '@ant-design/icons';
import { Card, Col, Typography } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { StrapiProductThumbnail } from '~/utilities/product-helper';

function ProductTableCartSmallScreen({
    handleRemoveCartItem,
    handleUpdateCart,
    product,
    index,
    language,
    refreshPage
}) {
    const [quantity, setQuantity] = useState(parseInt(product.quantity));
    const [productStock,setProductStock] = useState(product.product_stock)
    const labels = Labels(language)

    return (
        <div className="product-table-small-card">
            <>
                <Card
                    bordered={false}
                    className="col-md-12 table-product-small-card"
                    style={{
                        // border: '1px solid blue',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    }}>
                    <a
                        href="#"
                        onClick={(e) => {
                            handleRemoveCartItem(
                                constants.sessionId !== null
                                    ? product.slug_Id
                                    : index
                            );
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
                            className="table-product-small-card__title"
                            style={{ fontSize: '18px' }}>
                            {language === constants.English ?  product.Name :product.arabic_name}{' '}
                        </a>
                    </Link>
                    <Typography style={{ fontSize: '16px' }}>
                        ₹ {product.cut_prize} x {product.quantity}
                    </Typography>
                    <Typography style={{ fontSize: '16px' }}>
                        
                            ₹ {(product.quantity * product.cut_prize).toFixed(2)}
                    </Typography>
                    {(productStock < quantity) && (
                    <Typography style={{ fontSize: '16px',color:"red" }}>
                        
                            {labels['out of stock']}
                    </Typography>
                    )}
                    <select
                        className="form-control"
                        style={{ borderRadius: '0' ,maxWidth:"100px",marginTop:"1rem" }}
                        onChange={(e) => {
                            e.preventDefault();
                            setQuantity(e.target.value);
                            handleUpdateCart(
                                product.slug_Id,
                                e.target.value,
                               index
                            );
                            refreshPage()
                        }}
                        >
                        {[...Array(11)].map(
                            (e, i) => i !== 0 && <option selected={quantity === i} value={i}>{i}</option>
                        )}
                    </select>
                    
                    <Col className="gutter-row" span={12}></Col>
                </Card>
            </>
        </div>
    );
}

export default ProductTableCartSmallScreen;
