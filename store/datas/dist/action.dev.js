"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeLanguage = exports.setWishlistCount = exports.setfetchCompareData = exports.setProSecondaryVarientId = exports.setProPrimaryVarientId = exports.setProPrimaryVarient = exports.setProVarient = exports.setForgetPasswordEmail = exports.updateNavbar = exports.setMenuItem = exports.setNavCartProduct = exports.shopPageDataBy = exports.setLanguage = exports.callrewardPointandPromocodeApis = exports.addPlaceOrderDatas = exports.productVarient = exports.actionTypes = void 0;
var actionTypes = {
  PRODUCT_SLUG_VARIENT: ' PRODUCT_SLUG_VARIENT',
  ADD_PLACE_ORDER_DETAILS: 'ADD_PLACE_ORDER_DETAILS',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_SHOP_PAGE_DATA_BY: " SET_SHOP_PAGE_DATA_BY",
  SET_NAV_CART_PRODUCT: " SET_NAV_CART_PRODUCT",
  SET_MENU_ITEMS: " SET_MENU_ITEMS",
  SET_UPDATE_NAVBAR: " SET_UPDATE_NAVBAR",
  SET_FORGET_PASSWORD_EMAIL: "SET_FORGET_PASSWORD_EMAIL",
  SET_PRO_VARIENT: "SET_PRO_VARIENT",
  SET_PRO_PRIMARY_VARIENT: " SET_PRO_PRIMARY_VARIENT",
  SET_PRO_SECONDARY_VARIENT_ID: "SET_PRO_SECONDARY_VARIENT_ID",
  SET_PRO_PRIMARY_VARIENT_ID: " SET_PRO_PRIMARY_VARIENT_ID",
  SET_FETCH_COMPARE_DATA: "SET_FETCH_COMPARE_DATA",
  SET_WISHLIST_COUNT: "SET_WISHLIST_COUNT",
  SET_CHANGE_LANGUAGE: "SET_CHANGE_LANGUAGE",
  SET_SHOP_PAGE_MAX_PRICE_RANGE: "SET_SHOP_PAGE_MAX_PRICE_RANGE",
  SET_SHOP_PAGE_MIN_PRICE_RANGE: "SET_SHOP_PAGE_MIN_PRICE_RANGE",
  SET_CALL_REWARDPOINT_PROMOCODE: "SET_CALL_REWARDPOINT_PROMOCODE"
};
exports.actionTypes = actionTypes;

var productVarient = function productVarient(data) {
  return {
    type: actionTypes.PRODUCT_SLUG_VARIENT,
    payload: data
  };
}; // export const setShopPageMinPrice = (data)=>{
//     return {
//         type:actionTypes.SET_SHOP_PAGE_MIN_PRICE_RANGE,
//         payload:data 
//     }
// }
// export const setShopPageMaxPrice = (data)=>{
//     return {
//         type:actionTypes.SET_SHOP_PAGE_MAX_PRICE_RANGE,
//         payload:data 
//     }
// }


exports.productVarient = productVarient;

var addPlaceOrderDatas = function addPlaceOrderDatas(data) {
  return {
    type: actionTypes.ADD_PLACE_ORDER_DETAILS,
    payload: data
  };
};

exports.addPlaceOrderDatas = addPlaceOrderDatas;

var callrewardPointandPromocodeApis = function callrewardPointandPromocodeApis(data) {
  return {
    type: actionTypes.SET_CALL_REWARDPOINT_PROMOCODE,
    payload: data
  };
};

exports.callrewardPointandPromocodeApis = callrewardPointandPromocodeApis;

var setLanguage = function setLanguage(data) {
  localStorage.setItem("abbb", "dfsfds");
  return {
    type: actionTypes.SET_LANGUAGE,
    payload: data
  };
};

exports.setLanguage = setLanguage;

var shopPageDataBy = function shopPageDataBy(data) {
  return {
    type: actionTypes.SET_SHOP_PAGE_DATA_BY,
    payload: data
  };
};

exports.shopPageDataBy = shopPageDataBy;

var setNavCartProduct = function setNavCartProduct(data) {
  return {
    type: actionTypes.SET_NAV_CART_PRODUCT,
    payload: data
  };
};

exports.setNavCartProduct = setNavCartProduct;

var setMenuItem = function setMenuItem(data) {
  return {
    type: actionTypes.SET_MENU_ITEMS,
    payload: data
  };
};

exports.setMenuItem = setMenuItem;

var updateNavbar = function updateNavbar(data) {
  return {
    type: actionTypes.SET_UPDATE_NAVBAR,
    payload: data
  };
};

exports.updateNavbar = updateNavbar;

var setForgetPasswordEmail = function setForgetPasswordEmail(data) {
  return {
    type: actionTypes.SET_FORGET_PASSWORD_EMAIL,
    payload: data
  };
};

exports.setForgetPasswordEmail = setForgetPasswordEmail;

var setProVarient = function setProVarient(data) {
  return {
    type: actionTypes.SET_PRO_VARIENT,
    payload: data
  };
};

exports.setProVarient = setProVarient;

var setProPrimaryVarient = function setProPrimaryVarient(data) {
  return {
    type: actionTypes.SET_PRO_PRIMARY_VARIENT,
    payload: data
  };
};

exports.setProPrimaryVarient = setProPrimaryVarient;

var setProPrimaryVarientId = function setProPrimaryVarientId(data) {
  return {
    type: actionTypes.SET_PRO_PRIMARY_VARIENT_ID,
    payload: data
  };
};

exports.setProPrimaryVarientId = setProPrimaryVarientId;

var setProSecondaryVarientId = function setProSecondaryVarientId(data) {
  return {
    type: actionTypes.SET_PRO_SECONDARY_VARIENT_ID,
    payload: data
  };
};

exports.setProSecondaryVarientId = setProSecondaryVarientId;

var setfetchCompareData = function setfetchCompareData(data) {
  return {
    type: actionTypes.SET_FETCH_COMPARE_DATA,
    payload: data
  };
};

exports.setfetchCompareData = setfetchCompareData;

var setWishlistCount = function setWishlistCount(data) {
  return {
    type: actionTypes.SET_WISHLIST_COUNT,
    payload: data
  };
};

exports.setWishlistCount = setWishlistCount;

var changeLanguage = function changeLanguage(data) {
  return {
    type: actionTypes.SET_CHANGE_LANGUAGE,
    payload: data
  };
};

exports.changeLanguage = changeLanguage;