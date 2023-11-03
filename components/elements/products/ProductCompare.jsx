import { Col, Space, Table } from 'antd';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import CompareTable from '~/components/partials/account/modules/CompareTable';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { setfetchCompareData, updateNavbar } from '~/store/datas/action';
import { showNotification } from '~/utilities/common-helpers';
// const { Space, Table, Tag } = antd;
function ProductCompare(language) {
    const [product, setProduct] = useState([]);
    const fetchCompareData = useSelector(
        (state) => state.datas.fetchCompareData
    );
    

    const [productDetail_,setProductDetail_] = useState([])
    const [result_,setResult_] = useState([])

    


    // const language = useLanguageHook();

    const comparePageDatas = () => {
        Axios.post(apis.compare, {
            session_id: constants.sessionId,
            language: language,
            productVarientId: JSON.parse(
                localStorage.getItem('productIdForCompare')
            ),
        })
            .then((res) => {
                // dispatch(setfetchCompareData(true))


                let productKeys = [];
                let specItems = [];
                let result = [];
                let productDetails = [['', '', '', '', '', '']];

                setProduct(res.data.data);

                res.data.data.map((i, j) => {
                    i.values.map((h, k) => {
                        !productKeys.includes(h.key) && productKeys.push(h.key);
                    });
                });
        
                res.data.data.map((_, index_) => {
                    productKeys.map((items, __) => {
                        let index = -1;
                        res.data.data[index_].values.map((items_, index__) => {
                            if (items_.key === items) {
                                index = index__;
                            }
                        });
                        if (index !== -1) {
                            specItems.push(res.data.data[index_].values[index].value);
                        } else {
                            specItems.push('');
                        }
                    });
        
                    result.push(specItems);
                    specItems = [];
                });
        
                result.unshift(productKeys);
        
                res.data.data.map((i, j) => {
                    let productDetail = [];
        
                    productDetail.push(
                        '',
                        i.product_name,
                        i.slug_id,
                        i.product_image,
                        i.cut_prize,
                        i.actual_Prize
                    );
                    productDetails.push(productDetail);
                    // // productDetail
        
                   
                });
                console.log("aaa");
                setResult_(result)
                setProductDetail_(productDetails)
            })
            .catch((err) => {
                showNotification(language,constants.Error);
            });
    };



    useEffect(() => {
        comparePageDatas();
    }, [fetchCompareData]);

    

    

    return (
         <>
            {result_.length !== 0 && (
                <Col style={{ marginTop: '2rem' }} >
                    <CompareTable
                        language={language}
                        data={result_}
                        productDetails={productDetail_}
                    
                    />
                    
                </Col>
            )}
        </>
    );
}

export default ProductCompare;
