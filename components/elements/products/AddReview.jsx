import React from 'react';
import { Rate, Typography, Input, Col, Form } from 'antd';
import { Labels } from '~/public/static/data/my-constants/Labels';

function AddReview({ addReview, setRating, setTitle, setDescription ,language }) {
    const { Title } = Typography;
    const { TextArea } = Input;

    const labels = Labels(language)
    return (
        language !== false &&
        <Form onFinish={() => addReview()}>
            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                <Title level={4}>{labels['Rate this product']}</Title>
                <Rate defaultValue={0} onChange={(e) => setRating(e)} />
            </Col>

            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                <Title level={4}>{labels['Rate this product']}</Title>
                <TextArea
                    placeholder="Review this product..."
                    autoSize={{ minRows: 8 }}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Col>

            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                <Title level={4}> {labels['Title of this review']}</Title>
                <TextArea
                    placeholder="Review title..."
                    autoSize={{ minRows: 1 }}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Col>

            <Col className="gutter-row" span={24} style={{ marginTop: '2rem' }}>
                <button
                    type="submit"
                    className="ps-btn"
                    style={{ maxWidth: '100%' }}>
                        {labels['Add review']}
                    
                </button>
            </Col>
        </Form>
    );
}

export default AddReview;
