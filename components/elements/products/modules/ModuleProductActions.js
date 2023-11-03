import React, { useState } from 'react';
import { Modal } from 'antd';
import { addItem } from '~/store/cart/action';
import { addItemToCompare } from '~/store/compare/action';
import { addItemToWishlist } from '~/store/wishlist/action';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetailQuickView from '~/components/elements/detail/ProductDetailQuickView';
import { addToGuestCart } from '~/utilities/product-helper';
import { showNotification } from '~/utilities/common-helpers';
import Router from 'next/router';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import Compare from '~/components/partials/account/Compare';
import { setfetchCompareData, setProVarient, updateNavbar } from '~/store/datas/action';
import ProductCompare from '../ProductCompare';
import { HeartFilled, LoadingOutlined } from '@ant-design/icons';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import ProductDetailFullwidth from '../../detail/ProductDetailFullwidth';
import ArabicProductDetailFullwidth from '../../detail/ArabicProductDetailFullwidth';


const ModuleProductActions = ({ product,language }) => {

    // console.log("wwww");
    
    const dispatch = useDispatch();
    const [isQuickView, setIsQuickView] = useState(false);
    const [isCompare, setIsCompare] = useState(false);
    const fetchCompareData = useSelector((state) => state.datas.fetchCompareData);
    const [loadingBtns,setLoadingBtns] = useState({
        cartBtn:false,
        wishListBtn:false,
        quickView:false,
        compareView:false,
    })

    

    const [loadingCartBtn,setLoadingCartBtn] = useState(false)
    const [loadingWishListBtn,setLoadingWishListBtn] = useState(false)
    const [loadingQuickViewBtn,setLoadingQuickViewBtn] = useState(false)
    const [loadingCompareViewBtn,setLoadingCompareViewBtn] = useState(false)
    const [wishlistStatus,setWishlistStatus] = useState(product.wishlistStatus === 1 ? true : false)
    const [productStock,setProductStock] = useState(product.stock)

    const labels = Labels(language);

    const [pro,setPro] = useState(null)

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        setLoadingCartBtn(true)

        if (productStock < 1) {
            showNotification(
                language,
                constants.Sorry,
                labels['No Stock!'],
               
            );
        setLoadingCartBtn(false)

        }else{
        if (constants.sessionId === null) {

            // SetIsInCart(true);
            // setCartcount(cartcount + 1);
            addToGuestCart(product.slug_Id, 1,language);
            dispatch(updateNavbar(true));

            
            setLoadingCartBtn(false)
           

            

        } else {

            Axios.post(apis.addToCart, {
                language: language,
                session_id: constants.sessionId,
                cart_quantity: 1,
                productSlugId: product.slug_Id,
                is_productcard:true
            })
                .then((res) => {

                    if (res.data.status === 1) {
                        
                        showNotification(language,constants.Success, res.data.message);
                        dispatch(updateNavbar(true));
                        setLoadingCartBtn(false)   
                        setProductStock(productStock -1 )


                    }else{
                        showNotification(
                            language,
                            constants.Success,res.data.message
                        );
                        setLoadingCartBtn(false)
                    }
                      
                })
                .catch((error) => {
                    SetApiError(true);
                    showNotification(
                        language,
                      constants.Error
                    );
                });
        }

    }
    };



    const handleAddItemToWishlist = (e) => {
        setLoadingWishListBtn(true)
        if (localStorage.getItem('session_id') !== null) {
            Axios.post(apis.addToWishlist, {
                language: language,
                session_id: localStorage.getItem('session_id'),
                productSlugId: product.slug_Id,
            })
                .then((res) => {
                    if (res.data.status === 1) {
                        showNotification(language,constants.Success, res.data.message);
                        dispatch(updateNavbar(true));
                        setLoadingWishListBtn(false)
                        setWishlistStatus(true)

                    }
                    else{
                        setLoadingWishListBtn(false)
                        showNotification(
                            language,
                            constants.Error
                        );
                    }
                })
                .catch((error) => {
                    setLoadingWishListBtn(false)

                    SetApiError(true);
                    showNotification(
                        language,
                        constants.Error
                    );
                });
        } else {
            Router.push('/account/login');
            setLoadingWishListBtn(false)

        }
    };

    const handleShowQuickView = (e) => {

       
        setLoadingQuickViewBtn(true)
        // dispatch(setProVarient(product.slug_Id))


        Axios.post(apis.productDetail, {
            session_id: constants['sessionId'],
            language: language,
            slug_Id: product.slug_Id,
        })
            .then((res) => {
                setPro([res.data.data.product[0]]);
                setIsQuickView(true);

            })
            .catch((err) => {
                showNotification(language, constants.Error);
                setLoadingQuickViewBtn(false)

            });
        

        
        setLoadingQuickViewBtn(false)


    };

    const handleHideQuickView = (e) => {
        // e.preventDefault();
        setIsQuickView(false);
    };

    const handleShowCompareView = (e) => {
        setLoadingCompareViewBtn(true);
        let productIdForCompare =
            JSON.parse(localStorage.getItem('productIdForCompare')) === null
                ? []
                : JSON.parse(localStorage.getItem('productIdForCompare'));
        if (productIdForCompare.indexOf(product.slug_Id) === -1) {
            if (productIdForCompare.length > 2) {
                productIdForCompare.shift();
            }
            productIdForCompare.push(product.slug_Id);
        }
        localStorage.setItem(
            'productIdForCompare',
            JSON.stringify(productIdForCompare)
        );
        console.log("fdsafsd");
        // dispatch(setfetchCompareData(true));
        setLoadingCompareViewBtn(false);
    };

    const handleHideCompareView = (e) => {
        dispatch(setfetchCompareData(false));
    };

    console.log(fetchCompareData,"fetchCompareData");

    
    

    return (
       

        <>
        
        <div>
            <a
                // href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Add To Cart"
                onClick={ !loadingCartBtn && handleAddItemToCart}>
                    {!loadingCartBtn ? (
                <i className="icon-bag2"></i>

                    ):(
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                    )}
            </a>
            </div>
            
        <div>
            <a
                // href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Quick View"
                onClick={(e)=>{ dispatch(setProVarient(product.slug_Id)); !loadingQuickViewBtn && handleShowQuickView();e.preventDefault()}}>
                    {!loadingQuickViewBtn ? (
                <i className="icon-eye"></i>

                    ):(
                        <LoadingOutlined style={{ fontSize: 24 }} spin />

                    ) }
            </a>
            </div>
        <div>
            <a
                // href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to wishlist"
                onClick={(e)=>{!loadingWishListBtn&& handleAddItemToWishlist();e.preventDefault()}}>
                    {!loadingWishListBtn ? (
                        wishlistStatus === true ? (
                            <HeartFilled style={{position:"relative",top:"-20%"}} />


                        ):(
                            <i className="icon-heart" ></i>
 
                        )

                    ):(
                        <LoadingOutlined style={{ fontSize: 24 }} spin />

                    )}
            </a>
            </div>
        <div>
            <a
                // href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Compare"
                onClick={(e)=>{!loadingCompareViewBtn && dispatch(setfetchCompareData(true)); handleShowCompareView(e);e.preventDefault()}}>
                
                {!loadingCompareViewBtn ? (
                <i className="icon-chart-bars"></i>

                    ):(
                        <LoadingOutlined style={{ fontSize: 24 }} spin />

                    )}
            </a>
        </div>



        <Modal
            centered
            footer={null}
            width={1024}
            onCancel={(e) => handleHideQuickView(e)}
            visible={isQuickView}
            closeIcon={<i className="icon icon-cross2"></i>}>
           
            <h3>{labels['Quickview']} </h3>
            {/* <ProductDetailQuickView 
            
             slug_id={product.slug_Id} product={product} language={language}/> */}
             {language === constants.Arabic ? (
                <ArabicProductDetailFullwidth language={language} product={pro}/>
             ):(
                <ProductDetailFullwidth language={language} product={pro}  />

             )}

        </Modal>


        <Modal
            centered
            footer={null}
                        width={1024}
                        onCancel={(e) => handleHideCompareView(e)}
                        visible={fetchCompareData}
                        style={{zIndex:"1000000",marginTop:"5rem"}}
                        closeIcon={<i className="icon icon-cross2"></i>}>
                        <h3 style={{ textAlign: 'center' }}>
                            Compare Products
                        </h3>
                        <ProductCompare language={language} />
                    </Modal>
    </>
    );
};

export default ModuleProductActions;
