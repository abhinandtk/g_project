import constants from "./Constants"

const apis = {
    
    'metaTags':`${constants.port}/API/Meta_tagAPI`,
    'updatePhoneNumber':`${constants.port}/API/Update-phone`,

    
    'mainpage':`${constants.port}/API/home_PageAPI`,
    'productDetail':`${constants.port}/API/Product_detailAPI`,
    'productSortBy':`${constants.port}/API/sortProductsAPI`,
    'navBar':`${constants.port}/API/navBarAPI`,
    'shopPage':`${constants.port}/API/ShopPage_API `,
    'compare':`${constants.port}/API/compare_API`,
    'faq':`${constants.port}/API/FaqAPI`,



    'register':`${constants.port}/API/user_register_API`,
    'registerWithOtp':`${constants.port}/API/verifyregisterOTP_API`,
    'login':`${constants.port}/API/user_Login_API`,
    'logout':`${constants.port}/API/user_Logout_API`,
    'changePassword':`${constants.port}/API/Change_passwordAPI`,
    'myOrders':`${constants.port}/API/Order_ListAPI`,
    'orderDetail':`${constants.port}/API/Order_DetailsAPI`,
    'cancelOrder':`${constants.port}/API/Cancel_OrderAPI`,
    'forgotPassword':`${constants.port}/API/forgotpasswordAPI`,
    "resetPassword":`${constants.port}/API/Reset_password_API`,
    'registerWithGoogleOrFb':`${constants.port}/API/registerGoogleOrFbAPI`,
    'socialRegistration':`${constants.port}/API/social_registrationAPI`,

    'addToCart':`${constants.port}/API/Add_to_cartAPI`,
    'addToWishlist':`${constants.port}/API/Add_to_wishlistAPI`,

    'viewCart':`${constants.port}/API/ViewCartAPI`,
    'viewGuestCart':`${constants.port}/API/View_Guest_CartAPI`,
    'updateCart':`${constants.port}/API/UpdateCartAPI`, 
    'removeFromCart':`${constants.port}/API/Remove_from_cartAPI` ,

    'wishlist':`${constants.port}/API/View_wishlistAPI` ,
    'removeFromWishlist':`${constants.port}/API/Remove_from_wishlistAPI` ,
    'addToCartFromWishlist':`${constants.port}/API/add_wish_to_cartAPI` ,

    'getAddress':`${constants.port}/API/View_addressAPI`,  
    'editAddress':`${constants.port}/API/Edit_addressAPI`,
    'addAddress':`${constants.port}/API/Add_addressAPI`,
    'getAddressById':`${constants.port}/API/View_addressByIDAPI`,
    'setDefaultAddress':`${constants.port}/API/setDefaultAddressAPI`,
    'setBillingAddress':`${constants.port}/API/setBillingAddressAPI`,
    'locations':`${constants.port}/API/get_locations`,


    'checkout':`${constants.port}/API/CheckOutPageAPI`,
    'continueShipping':`${constants.port}/API/CheckOutPageAPI`,
    'discounts':`${constants.port}/API/discounts`,
    'applyRewardPoint':`${constants.port}/API/applyRewardPointAPI`,
    'placeOrder':`${constants.port}/API/Place_orderAPI`,
    'RewardPointApply':`${constants.port}/API/reward_pointcheckAPI`,
    'PromoCodeApply':`${constants.port}/API/promocode_checkAPI`,

    'addReview':`${constants.port}/API/Addproduct_reviewAPI`,
    'viewReview':`${constants.port}/API/viewReviewAPI`,
    "removeReview":`${constants.port}/API/removeReviewAPI`,
    'sortReviews':`${constants.port}/API/sortReviewsAPI`,

    'searchtags':`${constants.port}/API/search-tags`,
    

}

export default apis