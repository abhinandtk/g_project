"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(require("~/public/static/data/my-constants/Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apis = {
  'metaTags': "".concat(_Constants["default"].port, "/API/Meta_tagAPI"),
  'updatePhoneNumber': "".concat(_Constants["default"].port, "/API/Update-phone"),
  'mainpage': "".concat(_Constants["default"].port, "/API/home_PageAPI"),
  'productDetail': "".concat(_Constants["default"].port, "/API/Product_detailAPI"),
  'productSortBy': "".concat(_Constants["default"].port, "/API/sortProductsAPI"),
  'navBar': "".concat(_Constants["default"].port, "/API/navBarAPI"),
  'shopPage': "".concat(_Constants["default"].port, "/API/ShopPage_API "),
  'compare': "".concat(_Constants["default"].port, "/API/compare_API"),
  'faq': "".concat(_Constants["default"].port, "/API/FaqAPI"),
  'register': "".concat(_Constants["default"].port, "/API/user_register_API"),
  'registerWithOtp': "".concat(_Constants["default"].port, "/API/verifyregisterOTP_API"),
  'login': "".concat(_Constants["default"].port, "/API/user_Login_API"),
  'logout': "".concat(_Constants["default"].port, "/API/user_Logout_API"),
  'changePassword': "".concat(_Constants["default"].port, "/API/Change_passwordAPI"),
  'myOrders': "".concat(_Constants["default"].port, "/API/Order_ListAPI"),
  'orderDetail': "".concat(_Constants["default"].port, "/API/Order_DetailsAPI"),
  'cancelOrder': "".concat(_Constants["default"].port, "/API/Cancel_OrderAPI"),
  'forgotPassword': "".concat(_Constants["default"].port, "/API/forgotpasswordAPI"),
  "resetPassword": "".concat(_Constants["default"].port, "/API/Reset_password_API"),
  'registerWithGoogleOrFb': "".concat(_Constants["default"].port, "/API/registerGoogleOrFbAPI"),
  'socialRegistration': "".concat(_Constants["default"].port, "/API/social_registrationAPI"),
  'addToCart': "".concat(_Constants["default"].port, "/API/Add_to_cartAPI"),
  'addToWishlist': "".concat(_Constants["default"].port, "/API/Add_to_wishlistAPI"),
  'viewCart': "".concat(_Constants["default"].port, "/API/ViewCartAPI"),
  'viewGuestCart': "".concat(_Constants["default"].port, "/API/View_Guest_CartAPI"),
  'updateCart': "".concat(_Constants["default"].port, "/API/UpdateCartAPI"),
  'removeFromCart': "".concat(_Constants["default"].port, "/API/Remove_from_cartAPI"),
  'wishlist': "".concat(_Constants["default"].port, "/API/View_wishlistAPI"),
  'removeFromWishlist': "".concat(_Constants["default"].port, "/API/Remove_from_wishlistAPI"),
  'addToCartFromWishlist': "".concat(_Constants["default"].port, "/API/add_wish_to_cartAPI"),
  'getAddress': "".concat(_Constants["default"].port, "/API/View_addressAPI"),
  'editAddress': "".concat(_Constants["default"].port, "/API/Edit_addressAPI"),
  'addAddress': "".concat(_Constants["default"].port, "/API/Add_addressAPI"),
  'getAddressById': "".concat(_Constants["default"].port, "/API/View_addressByIDAPI"),
  'setDefaultAddress': "".concat(_Constants["default"].port, "/API/setDefaultAddressAPI"),
  'locations': "".concat(_Constants["default"].port, "/API/get_locations"),
  'checkout': "".concat(_Constants["default"].port, "/API/CheckOutPageAPI"),
  'continueShipping': "".concat(_Constants["default"].port, "/API/CheckOutPageAPI"),
  'discounts': "".concat(_Constants["default"].port, "/API/discounts"),
  'applyRewardPoint': "".concat(_Constants["default"].port, "/API/applyRewardPointAPI"),
  'placeOrder': "".concat(_Constants["default"].port, "/API/Place_orderAPI"),
  'RewardPointApply': "".concat(_Constants["default"].port, "/API/reward_pointcheckAPI"),
  'PromoCodeApply': "".concat(_Constants["default"].port, "/API/promocode_checkAPI"),
  'addReview': "".concat(_Constants["default"].port, "/API/Addproduct_reviewAPI"),
  'viewReview': "".concat(_Constants["default"].port, "/API/viewReviewAPI"),
  "removeReview": "".concat(_Constants["default"].port, "/API/removeReviewAPI"),
  'sortReviews': "".concat(_Constants["default"].port, "/API/sortReviewsAPI")
};
var _default = apis;
exports["default"] = _default;