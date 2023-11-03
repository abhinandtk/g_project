import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import { addToGuestCart } from '~/utilities/product-helper';
import { showNotification } from '~/utilities/common-helpers';
import { setfetchCompareData, updateNavbar } from '~/store/datas/action';
import { HeartFilled, LoadingOutlined } from '@ant-design/icons';
import constants from '~/public/static/data/my-constants/Constants';
import { Button, Modal } from 'antd';
import ProductCompare from '../../products/ProductCompare';

const ModuleDetailShoppingActions = ({
    product,
    extended = false,
    language,
}) => {
    const dispatch = useDispatch();
    const [quantity_, setQuantity] = useState(1);
    const Router = useRouter();

    const prVarientId = useSelector((state) => state.datas.proVarient);
    const [arr,setArr]=useState([1,2,3,4,5,6,7,8,9,10])

    const [wishlistStatus, setwishlistStatus] = useState(null);
    const [productStock, setProductStock] = useState(null);
    const [addToCartLoadingBtn, setAddToCartLoadinBtn] = useState(false);
    const [loadingCompareViewBtn, setLoadingCompareViewBtn] = useState(false);
    const fetchCompareData = useSelector(
        (state) => state.datas.fetchCompareData
    );

    


    useEffect(() => {
        product.Product_Items.map((item, index) => {
            item.multivarient.length !== 0
                ? item.multivarient.map((item_, index_) => {
                      if (item_.slug_id === prVarientId) {
                          setwishlistStatus(
                              item_.wishlist_status === 0 ? false : true
                          );
                          calculateDropdownQty(item_.stock);
                          setProductStock(item_.stock);
                        //   setArr(item_.stock);
                          
                      }
                    })
                : (setwishlistStatus(item.wishlist_status === 0 ? false : true), calculateDropdownQty(item.stock));
        });
    }, [prVarientId]);

    const calculateDropdownQty = (qty) => {
        if(qty > 10){
            var tempArr=[];
            for(var i=1; i<=10; i++){
              tempArr.push(i);
            }
            setArr(tempArr);
        }else{
            var tempArr=[];
            for(var i=1;i<=qty;i++){
              tempArr.push(i);
            }
            setArr(tempArr);
        }
    }

    const handleShowCompareView = (e) => {
        setLoadingCompareViewBtn(true);
        let productIdForCompare =product
            JSON.parse(localStorage.getItem('productIdForCompare')) === null
                ? []
                : JSON.parse(localStorage.getItem('productIdForCompare'));
        if (productIdForCompare.indexOf(prVarientId) === -1) {
            if (productIdForCompare.length > 2) {
                productIdForCompare.shift();
            }
            productIdForCompare.push(prVarientId);
        }
        localStorage.setItem(
            'productIdForCompare',
            JSON.stringify(productIdForCompare)
        );
        dispatch(setfetchCompareData(true));
        setLoadingCompareViewBtn(false);
    };

    const handleHideCompareView = (e) => {
        dispatch(setfetchCompareData(false));
    };

    const handleAddItemToCart = (e) => {
        setAddToCartLoadinBtn(true);
        if (constants.sessionId === null) {
            addToGuestCart(prVarientId, quantity_,language);
            dispatch(updateNavbar(true));
            setAddToCartLoadinBtn(false);
        } else {
            Axios.post(apis.addToCart, {
                language: language,
                session_id: constants.sessionId,
                cart_quantity: quantity_,
                productSlugId: prVarientId,
                is_productcard: false,
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
                            
                        );
                    }
                })
                .catch((error) => {
                    showNotification(language,constants.Error);
                    setAddToCartLoadinBtn(false);
                });
        }
    };

    const handleAddItemToWishlist = (e) => {
        
        e.preventDefault();
        if (localStorage.getItem('session_id') !== null) {
           
            Axios.post(apis.addToWishlist, {
                language: language,
                session_id: localStorage.getItem('session_id'),
                productSlugId: prVarientId,
            })
                .then((res) => {
                    if (res.data.status === 1) {
                        showNotification(language,constants.Success, res.data.message);
                        dispatch(updateNavbar(true));
                        setwishlistStatus(true);
                    }
                })
                .catch((error) => {

                    showNotification(language,constants.Error);
                });
        } else {
            Router.push('/account/login');
        }
    };

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity_ + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (quantity_ > 1) {
            setQuantity(quantity_ - 1);
        }
    };

    if (!extended) {
        return (
            productStock != 0 && (
                <div
                    className="ps-product__shopping"
                    style={{ display: 'flex', flexDirection: 'row' }}>
                    <figure style={{ maxWidth: '150px' }}>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            {/* <button
                                className="up"
                                onClick={(e) => handleIncreaseItemQty(e)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={(e) => handleDecreaseItemQty(e)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={quantity_}
                                disabled
                            /> */}
                           
                            <select className='form-control' style={{borderRadius: "0px"}} onChange={e =>setQuantity(e.target.value)} name="quantity" id="cars">
                        
                            { 
                            arr.map((item) =>
                            <option key={item} value={item}>{item}</option>
                            )}                            
                            </select>                           
                        </div>
                    </figure>

                    <Button
                        style={{ height: '40px', width: '120px' }}
                        className="product-detail__cart-btn "
                        // href="#"
                        loading={addToCartLoadingBtn}
                        onClick={(e) => {
                            handleAddItemToCart(e);
                            e.preventDefault();
                        }}>
                        Add to cart
                    </Button>

                    <div className="ps-product__actions">
                        {/* <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                            {wishlistStatus === false ? (
                                <i className="icon-heart"></i>
                            ) : (
                                <HeartFilled
                                    style={{
                                        position: 'relative',
                                        bottom: '0.7rem',
                                    }}
                                />
                            )}
                        </a> */}
                        {/* <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                            onClick={(e) => {
                                !loadingCompareViewBtn &&
                                    handleShowCompareView(e);
                                e.preventDefault();
                            }}>
                            {!loadingCompareViewBtn ? (
                                <i className="icon-chart-bars"></i>
                            ) : (
                                <LoadingOutlined
                                    style={{ fontSize: 24 }}
                                    spin
                                />
                            )}
                        </a> */}
                    </div>
                    <Modal
                        centered
                        footer={null}
                        width={1024}
                        onCancel={(e) => handleHideCompareView(e)}
                        visible={fetchCompareData}
                        style={{marginTop:"5rem"}}
                        closeIcon={<i className="icon icon-cross2"></i>}>
                        <h3 style={{ textAlign: 'center' }}>
                            Compare Products
                        </h3>
                        <ProductCompare language={language} />
                    </Modal>
                </div>
            )
        );
    } else {
        return (
            productStock != 0 && (
                <div className="ps-product__shopping extend">
                    <div className="ps-product__btn-group">
                        <figure>
                            <figcaption>Quantity</figcaption>
                            <div className="form-group--number">
                                <button
                                    className="up"
                                    onClick={(e) => handleIncreaseItemQty(e)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                <button
                                    className="down"
                                    onClick={(e) => handleDecreaseItemQty(e)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={quantity_}
                                    disabled
                                />
                            </div>
                        </figure>
                        <a
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={(e) => {
                                handleAddItemToCart(e);
                                e.preventDefault();
                            }}>
                            Add to cart
                        </a>
                        <div className="ps-product__actions">
                            <a
                                href="#"
                                onClick={(e) => handleAddItemToWishlist(e)}>
                                <i className="icon-heart"></i>
                            </a>
                            <a
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                                onClick={(e) => {
                                    !loadingCompareViewBtn &&
                                        handleShowCompareView(e);
                                    e.preventDefault();
                                }}>
                                {loadingCompareViewBtn ? (
                                    <i className="icon-chart-bars"></i>
                                ) : (
                                    <LoadingOutlined
                                        style={{ fontSize: 24 }}
                                        spin
                                    />
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            )
        );
    }
};

export default ModuleDetailShoppingActions;
