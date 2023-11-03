import { Card, Typography } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { Labels } from '~/public/static/data/my-constants/Labels';

function MyOrdersSmallScreen({ myOrdres ,language }) {
    const Router = useRouter();
    const labels = Labels(language)
    return (
        <div className="product-table-small-card">
            <>
                {myOrdres.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            bordered={true}
                            className="col-md-12 table-product-small-card"
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                marginBottom:"1rem"
                            }}>
                            <Typography style={{ fontSize: '16px' }}>
                                {item.order_id_m}
                            </Typography><br />
                            <Typography style={{ fontSize: '16px' }}>
                                {new Date(item.order_date).toDateString()}
                            </Typography><br />
                            <Typography style={{ fontSize: '16px' }}>
                               ₹ {item.order_total}
                            </Typography><br />
                            <Typography style={{ fontSize: '16px' }}>
                                {item.order_status}
                            </Typography><br />
                            <button
                                className="ps-btn"
                                onClick={() =>{
                                    Router.push(`/account/my-orders/${item.order_id_m}`)}
                                }>
                                    {labels['View']}
                                
                            </button>
                        </Card>
                    );
                })}
            </>
        </div>
    );
}

export default MyOrdersSmallScreen;
