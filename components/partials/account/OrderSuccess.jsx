import Axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { addPlaceOrderDatas } from '~/store/datas/action';

function OrderSuccess(props) {
    const dispatch = useDispatch();
    const Router = useRouter()
    const datas = useSelector((state) => state.datas.placeOrderDetails)

    const [language, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);
    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, []);

    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, [changeLanguage]);

    // const datas = JSON.parse(localStorage.getItem("OrderSuccessDetails"))


    const labels = Labels(language);



    return (
        language !== false &&  <section
            className="ps-checkout ps-section--shopping"
            style={{ marginBottom: '10rem' }}>
            <div className="container">
                <div className="ps-section__header" style={{paddingBottom:"0px"}}>
                    <h1>{labels['Thank you. Your order has been received.']} </h1>
                    {(datas.earned_reward_point !== null && datas.earned_reward_point !== undefined &&datas.earned_reward_point !== 0 ) && (
                    <h3 style={{marginTop:"2rem",color:"#343434"}}> {labels['You have earned']}  {datas.earned_reward_point}{labels['points']}</h3>
                    )}
                    </div>
                <div
                    className="ps-section__content"
                    style={{ marginTop: '5rem' }}>
                    <div className="ps-block--site-features ps-block--site-features-2">
                        <div className="ps-block__item">
                            <div className="ps-block__right">
                                <p>{labels['ORDER NUMBER:']} </p>
                                <p>{datas.order_id_m}</p>
                            </div>
                        </div>
                        <div className="ps-block__item">
                            <div className="ps-block__right">
                                <p> {labels['DATE:']}</p>
                                <p> { new Date (datas.order_date).toDateString()}</p>
                            </div>
                        </div>
                        {/* <div className="ps-block__item">
                            <div className="ps-block__right">
                                <p> {labels['EMAIL:']}</p>
                                <p>{constants.email}</p>
                            </div>
                        </div> */}
                        <div className="ps-block__item">
                            <div className="ps-block__right">
                                <p> {labels['TOTAL:']}</p>
                                <p>₹ {datas.order_total}</p>
                            </div>
                        </div>
                        <div className="ps-block__item">
                            <div className="ps-block__right">
                                <p> {labels['PAYMENT METHOD:']}</p>
                                <p>{datas.mode}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ps-section__cart-actions"
                        style={{ marginLeft: '4rem', marginTop: '5rem' }}
                        onClick={() => {
                            dispatch(addPlaceOrderDatas({}));
                            localStorage.removeItem("placeOrderDetails")
                        }}>
                            
                        {/* <Link href="/"> */}
                            <a onClick={()=>Router.push("/")}>
                                <i className="icon-arrow-left mr-2"></i>
                                {labels['Back to Shop']}
                                
                            </a>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrderSuccess;
