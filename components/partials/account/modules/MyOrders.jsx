import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { useRouter } from 'next/router';
import MyOrdersSmallScreen from './MyOrdersSmallScreen';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { Labels } from '~/public/static/data/my-constants/Labels';

function MyOrders({language}) {
    const [myOrdres, setMyOrders] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [offset, SetOffset] = useState(0);
    const Router = useRouter();
    // const language = useLanguageHook();


    const myOrdresDatas = () => {
        Axios.post(apis.myOrders, {
            session_id: constants['sessionId'],
            language: language,
            offset: offset,
        })
            .then((res) => {
                console.log(res,"response in my order",constants['sessionId'],language,offset );
                setMyOrders(res.data.data.orders_list);
                setApiSuccess(true);
            })
            .catch((err) => {
                console.log(err,"err in my order");
                SetApiError(true);
            });
    };

    useEffect(() => {
        console.log("wwww");
        myOrdresDatas();
    }, []);

    const labels = Labels(language)
    const tableColumn = [
        {
            title: 'Id',

            key: 'Id',
            width: '50px',
            render: (text, myOrdres) =>
                // <Link href="/account/invoice-detail">
                myOrdres.order_id_m,
            // </Link>
        },
        {
        title: labels['Date'],
            key: 'dateCreate',
            width: '150px',
            render: (text, myOrdres) =>
                new Date(myOrdres.order_date).toDateString(),
        },
        {
            title: labels['Amount'],
            rowKey: 'amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text, myOrdres) => (
                <span className="text-right">₹ {myOrdres.order_total}</span>
            ),
        },
        {
            title: labels['Status'],
            key: 'status',
            dataIndex: 'status',
            rowKey: 'status',
            width: '150px',
            render: (text, myOrdres) => (
                <span className="text-right">{myOrdres.order_status}</span>
            ),
        },

        {
            key: 'btn',
            width: '120px',
            render: (text, myOrdres) => (
                <button
                    className="ps-btn"
                    onClick={() =>
                        Router.push(`/account/my-orders/${myOrdres.order_id_m}`)
                    }>
                        {labels['View']}
                    
                </button>
            ),
        },
        
    ];

    return (
        language !== false && <>
            <div className="table-products-big-screen">
                <Table

                    columns={tableColumn}
                    dataSource={myOrdres}
                    bordered={true}
                />
            </div>
            <MyOrdersSmallScreen language={language} myOrdres={myOrdres} />
        </>
        // <></>
    );
}

export default MyOrders;
