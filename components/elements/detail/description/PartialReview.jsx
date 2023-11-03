import React, { useState } from 'react';
import { Comment, List, Rate, Tooltip } from 'antd';
import { useEffect } from 'react';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import { useRouter } from 'next/router';
import { showNotification } from '~/utilities/common-helpers';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';

const PartialReview = ({ comments, language }) => {
    const [allComments, setAllComments] = useState([]);
    const labels =Labels(language)

    useEffect(() => {
        setAllComments(comments);
    }, []);

    const router = useRouter();
    const { pid } = router.query;
    const data = [];
    allComments.map((item, index) => {
        data.push({
            author: item.customer_name,
            avatar: '/static/img/user.jpg',
            content: [
                <Rate disabled={true} value={item.rating} key={index} />,
                <p key={index}>
                    <b>{item.title}</b>
                </p>,
                <p key={index}>{item.description}</p>,
            ],
            datetime: <span>{new Date(item.date).toDateString()}</span>,
        });
    });

    function getData(sortBy) {
        Axios.post(apis.sortReviews, {
            language: language,
            productSlugId: pid,
            sort_by: sortBy,
        })
            .then((res) => {
                setAllComments(res.data.data.reviews);
            })
            .catch((err) => {
                showNotification(language, constants.Error);
            });
    }

    return (
        <div className="row" >
            <div className="col-xl-7 " >
                {comments.length !== 0 && (
                    <select
                        onChange={(e) => getData(e.target.value)}
                        style={{ maxWidth: '250px' }}
                        className="form-control ps-select "
                        data-placeholder="Sort Items">
                        <option value={null} selected>
                            
                            {labels['Sort by latest']}
                        </option>
                        <option value="LTH"> {labels['Sort by rating: low to high']}</option>
                        <option value="HTL"> {labels['Sort by rating: high to low']}</option>
                    </select>
                )}
                <List
                    className="comment-list comment-list__product-detail"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <>
                            <li>
                                <Comment
                                    author={item.author}
                                    avatar={item.avatar}
                                    content={item.content}
                                    datetime={item.datetime}
                                />
                            </li>
                        </>
                    )}
                />
            </div>
        </div>
    );
};

export default PartialReview;
