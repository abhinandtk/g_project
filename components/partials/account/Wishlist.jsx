import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import WishlistItems from './WishlistItems';
import { showNotification } from '~/utilities/common-helpers';
import Error from '~/pages/404';
import WishlistCardsSmallScreen from './modules/WishlistCardsSmallScreen';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { useDispatch, useSelector } from 'react-redux';
import { updateNavbar } from '~/store/datas/action';
import { Labels } from '~/public/static/data/my-constants/Labels';
function Wishlist() {
   
    const [wishlistData, setWishListData] = useState();
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    // const language = useLanguageHook();
    const dispatch = useDispatch()

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

 
    // const language = useLanguageHook();

    const labels = Labels(language);


    const wishlistDatas = () => {
        Axios.post(apis.wishlist, {
            session_id: localStorage.getItem('session_id'),
            language:language,
        })
            .then((res) => {
                setWishListData(res.data.data.products);
                setApiSuccess(true);
            })
            .catch((err) => {
                SetApiError(true);
            });
    };

    useEffect(() => {
        language !== false && wishlistDatas();
    }, [language]);

    const handleAddItemToCart = (slug_id) => {
        Axios.post(apis.addToCartFromWishlist, {
            session_id: localStorage.getItem('session_id'),
            productSlugVarient: slug_id,
            language: language,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    const new_datas = wishlistData.filter(
                        (item) => item.slug_Id !== slug_id
                    );
                    setWishListData(new_datas);

                dispatch(updateNavbar(true));

                    // wishlistDatas();
                    showNotification(language,constants.Success, res.data.message);
                }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(
                    language,
                    constants.Error

                );
            });
    };

    const handleRemoveWishListItem = (slug_id) => {
        Axios.post(apis.removeFromWishlist, {
            session_id: localStorage.getItem('session_id'),
            productSlugVarient: slug_id,
            language: language,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    const new_datas = wishlistData.filter(
                        (item) => item.slug_Id !== slug_id
                    );

                    setWishListData(new_datas);
                dispatch(updateNavbar(true));


                    // wishlistDatas();
                    showNotification(language,constants.Success, res.data.message);
                }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(language,
                    constants.Error
                );
            });
    };

    // render() {
    // const { wishlistItems } = this.props;
    return (
        language !== false && <div className="ps-section--shopping ps-whishlist" style={{minHeight:"400px"}}>
            <div className="container">
                {/* <div className="ps-section__header">
                    <h1>Wishlist</h1>
                </div> */}
                <h3 style={{fontWeight:"600",color:"#242424"}}>Wishlist</h3>

                <div className="ps-section__content">
                    {apiError && <Error />}
                    {apiSuccess && (
                        <>
                            {wishlistData.length === 0 && (
                                <div
                                    className="alert alert-danger"
                                    role="alert">
                                        {labels['Wishlist is empty!']}
                                    
                                </div>
                            )}
                            {wishlistData.length !== 0 && (
                                <>
                                <div className="table-responsive table-products-big-screen">
                                    <table className="table ps-table--whishlist">
                                        <thead>
                                            <tr >
                                                <th></th>
                                                <th> {labels['Product name']} </th>
                                                <th  style={{textAlign:"left"}}>{labels['Unit Price']}</th>
                                                {/* <th>Vendor</th> */}
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistData.map(
                                                (product, index) => (
                                                    <>
                                                    <WishlistItems
                                                        language={language}
                                                        key={index}
                                                        product={product}
                                                        handleAddItemToCart={
                                                            handleAddItemToCart
                                                        }
                                                        handleRemoveWishListItem={
                                                            handleRemoveWishListItem
                                                        }
                                                    />
                                                   
                                                    </>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                    
                                </div>
                                <>
                                {wishlistData.map((product, index) => {
                                    return (
                                        <WishlistCardsSmallScreen
                                            key={index}
                                            language={language}
                                            product={product}
                                            handleAddItemToCart={
                                                handleAddItemToCart
                                            }
                                            handleRemoveWishListItem={
                                                handleRemoveWishListItem
                                            }
                                        />
                                    );
                                })}
                                </>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
    // }
}
// const mapStateToProps = state => {
//     return state.wishlist;
// };
// export default connect(mapStateToProps)(Wishlist);
export default Wishlist;
