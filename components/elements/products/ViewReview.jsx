import { Col, Rate, Typography } from 'antd';
import React from 'react';
import { Labels } from '~/public/static/data/my-constants/Labels';

function ViewReview({ rating, title, description,removeReview,reviewId , language }) {
    const labels = Labels(language)
    const { Paragraph, Text } = Typography;
    return (
        
        language !== false &&<>
        
            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                <Rate disabled={true} value={rating} />
            </Col>
            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                <Text strong={true} > {title}</Text>
            </Col>
            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                < Paragraph>{description} </Paragraph>
            </Col>
            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                <button
                    type="submit"
                    className="ps-btn"
                    style={{ maxWidth: '100%' }}
                    onClick={()=>removeReview(reviewId)}>
                    {labels['Remove review']}
                </button>
            </Col>
        </>
    );
}

export default ViewReview;
