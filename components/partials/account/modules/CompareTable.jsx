import { Button } from 'antd';
import Axios from 'axios';
import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import apis from '~/components/myspace/constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import {
    setfetchCompareData,
    setProVarient,
    updateNavbar,
} from '~/store/datas/action';
import { showNotification } from '~/utilities/common-helpers';

function CompareTable({ data, productDetails, }) {
    const [datas, setDatas] = useState(data);
    const [productDetails_,setProductDetails_] = useState(productDetails)
    const dispatch = useDispatch();
    const router = useRouter();
    // const language = useLanguageHook();

    const [language, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);
    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, []);
    const labels = Labels(language)

    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, [changeLanguage]);
    const [addToCartLoadingBtn, setAddToCartLoadinBtn] = useState(false);
    const [transArr1, setTransArr1] = useState(
        datas[0].map((_, c) => datas.map((r) => r[c]))
    );

    const handleAddItemToCart = (productId) => {
        setAddToCartLoadinBtn(true);
        if (constants.sessionId === null) {
            addToGuestCart(productId, 1);
            dispatch(updateNavbar(true));
            setAddToCartLoadinBtn(false);
        } else {
            Axios.post(apis.addToCart, {
                language: language,
                session_id: constants.sessionId,
                cart_quantity: 1,
                productSlugId: productId,
                is_productcard: true,
            })
                .then((res) => {
                    if (res.data.status === 1) {
                        showNotification(language,constants.Success, res.data.message);
                        dispatch(updateNavbar(true));
                        setAddToCartLoadinBtn(false);
                    } else {
                        setAddToCartLoadinBtn(false);
                        showNotification(
                            language,
                            constants.Sorry,
                            res.data.message,
                            'warning'
                        );
                    }
                })
                .catch((error) => {
                    // SetApiError(true);
                    showNotification(language,constants.Error);
                    setAddToCartLoadinBtn(false);
                });
        }
    };

    function removeCompareItem(data, productDetails, removeItem, itemPosition) {
        const new_datas = JSON.parse(
            localStorage.getItem('productIdForCompare')
        ).filter((item, index) => item !== removeItem);

        localStorage.setItem('productIdForCompare', JSON.stringify(new_datas));
        showNotification(language,constants.Success,"Successfully Removed")

        dispatch(setfetchCompareData(false))

        let filterItems = datas.filter((item, index) => index !== itemPosition)
        setDatas(datas.filter((item, index) => index !== itemPosition))
        productDetails = productDetails_.filter((item,index)=> index !== itemPosition)
        setTransArr1(filterItems[0].map((_, c) => filterItems.map((r) => r[c])))

    }


    return (
        
        language !== false && 
        <table style={{ border: '0.5px solid #C5C5C5 ', width: '100%' , overflowX:"auto",display:"block"}}>
            {

                transArr1.map((rows, index1) => {
                

                    return (
                        <tr key={index1}>
                           
                            {rows.map((cell, index) => {
                                if (index1 === 0) {
                                    return  productDetails.map((i, j) => {
                                        return (
                                            index < 1 && (
                                                <td key={j}
                                                    style={{
                                                        padding: '1%',
                                                        border: '1px solid #C5C5C5',
                                                        width: '25%',
                                                        minWidth:"150px"
                                                        
                                                    }}>
                                                    {j !== 0 && (
                                                        <div>
                                                            <div
                                                                style={{
                                                                    width: '100%',
                                                                    borderBottom:
                                                                        '0.5px dashed #C5C5C5',
                                                                    padding:
                                                                        '1%',
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={() =>
                                                                    removeCompareItem(
                                                                        datas,
                                                                        productDetails_,
                                                                        i[2],
                                                                        j
                                                                    )
                                                                }>
                                                                    {labels['Remove']}
                                                                
                                                            </div>
                                                            <img
                                                                src={`${constants.port}${i[3]}`}
                                                                style={{
                                                                    height: '150px',
                                                                    width: '150px',
                                                                    margin: 'auto auto',
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={() => {
                                                                    dispatch(
                                                                        setProVarient(
                                                                            i[2]
                                                                        )
                                                                    );
                                                                    dispatch(
                                                                        setfetchCompareData(
                                                                            false
                                                                        )
                                                                    );

                                                                    router.push(
                                                                        `/product/${i[2]}`
                                                                    );
                                                                }}
                                                            />
                                                            <br />

                                                            <p className="product-name__compare">
                                                                {i[1]}{' '}
                                                            </p>
                                                            <br />

                                                            <div
                                                                style={{
                                                                    marginTop:
                                                                        '-3rem',
                                                                }}>
                                                                <strong
                                                                    style={{
                                                                        fontSize:
                                                                            '18px',
                                                                    }}>
                                                                    ₹ {i[4]}
                                                                </strong>
                                                                <br />
                                                                <p
                                                                    style={{
                                                                        textDecoration:
                                                                            'line-through',
                                                                    }}>
                                                                    ₹ {i[5]}
                                                                </p>
                                                                <Button
                                                                    style={{
                                                                        height: '40px',
                                                                        width: '120px',
                                                                    }}
                                                                    className="product-detail__cart-btn "
                                                                    loading={
                                                                        addToCartLoadingBtn
                                                                    }
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        handleAddItemToCart(
                                                                            i[2]
                                                                        );
                                                                        e.preventDefault();
                                                                    }}>
                                                                    {labels['Add to cart']}
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                            )
                                        );
                                    });
                                } else {
                                    // {rows.map((cell, index) => {
                                        return(
                                            <td
                                            style={{
                                                padding: '1%',
                                                border: '1px solid #C5C5C5',
                                                width: '25%',
                                                minWidth:"150px"

                                            }}>
                                                {cell}
                                           
                                        </td>
                                    )
                                // })}
                                    
                                       
                                }
                            })}
                        </tr>
                    );
                    // return <tr>{row}</tr>;
                })
            }
        </table>
        // </div>
    );
}

export default CompareTable;
