"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _Constants = _interopRequireDefault(require("~/public/static/data/my-constants/Constants"));

var _action = require("./action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  productVarient: null,
  placeOrderDetails: {},
  language: typeof window !== 'undefined' ? localStorage.getItem("language") : 'english',
  shopPageDataBy: null,
  navCartProudct: [],
  menuItems: [],
  updateNavbar: false,
  forgetPasswordEmaiId: null,
  proVarient: null,
  proPrimaryVarient: 1,
  proPrimaryVarientId: null,
  proSecondaryVarientId: null,
  fetchCompareData: false,
  wishlistCount: 0,
  changeLanguage: true,
  callrewardPointandPromocode: false
};
exports.initialState = initialState;
var actionType = '';
var actionPayload = '';

var Reducer = function Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action !== undefined) {
    actionType = action.type;
    actionPayload = action.payload;
  }

  if (actionType === _action.actionTypes.SET_CHANGE_LANGUAGE) {
    var states = _objectSpread({}, state);

    states['changeLanguage'] = !states['changeLanguage'];
    return state = states;
  } // if (actionType === actionTypes.SET_SHOP_PAGE_MIN_PRICE_RANGE) {
  //     const states = { ...state };
  //     states['shopPageMinPriceRange'] = actionPayload;
  //     return (state = states);
  // } 
  // if (actionType === actionTypes.SET_SHOP_PAGE_MAX_PRICE_RANGE) {
  //     const states = { ...state };
  //     states['shopPageMaxPriceRange'] = actionPayload;
  //     return (state = states);
  // } 


  if (actionType === _action.actionTypes.PRODUCT_SLUG_VARIENT) {
    return state = actionPayload;
  } else if (actionType === _action.actionTypes.ADD_PLACE_ORDER_DETAILS) {
    var _states = _objectSpread({}, state);

    _states['placeOrderDetails'] = actionPayload;
    return state = _states;
  } else if (actionType === _action.actionTypes.SET_CALL_REWARDPOINT_PROMOCODE) {
    var _states2 = _objectSpread({}, state);

    _states2['callrewardPointandPromocode'] = actionPayload;
    return state = _states2;
  } else if (actionType === _action.actionTypes.SET_LANGUAGE) {
    var _states3 = _objectSpread({}, state);

    _states3['language'] = actionPayload;
    localStorage.setItem("language", actionPayload);
    return state = _states3;
  } else if (actionType === _action.actionTypes.SET_SHOP_PAGE_DATA_BY) {
    var _states4 = _objectSpread({}, state);

    _states4['shopPageDataBy'] = actionPayload;
    return state = _states4;
  } else if (actionType === _action.actionTypes.SET_NAV_CART_PRODUCT) {
    var _states5 = _objectSpread({}, state);

    _states5['navCartProudct'] = actionPayload;
    return state = _states5;
  } else if (actionType === _action.actionTypes.SET_MENU_ITEMS) {
    var _states6 = _objectSpread({}, state);

    _states6['menuItems'] = actionPayload;
    return state = _states6;
  } else if (actionType === _action.actionTypes.SET_UPDATE_NAVBAR) {
    var _states7 = _objectSpread({}, state);

    _states7['updateNavbar'] = actionPayload;
    return state = _states7;
  } else if (actionType === _action.actionTypes.SET_FORGET_PASSWORD_EMAIL) {
    var _states8 = _objectSpread({}, state);

    _states8['forgetPasswordEmaiId'] = actionPayload;
    return state = _states8;
  } else if (actionType === _action.actionTypes.SET_PRO_VARIENT) {
    var _states9 = _objectSpread({}, state);

    _states9['proVarient'] = actionPayload;
    return state = _states9;
  } else if (actionType === _action.actionTypes.SET_PRO_PRIMARY_VARIENT) {
    var _states10 = _objectSpread({}, state);

    _states10['proPrimaryVarient'] = actionPayload;
    return state = _states10;
  } else if (actionType === _action.actionTypes.SET_PRO_PRIMARY_VARIENT_ID) {
    var _states11 = _objectSpread({}, state);

    _states11['proPrimaryVarientId'] = actionPayload;
    return state = _states11;
  } else if (actionType === _action.actionTypes.SET_PRO_SECONDARY_VARIENT_ID) {
    var _states12 = _objectSpread({}, state);

    _states12['proSecondaryVarientId'] = actionPayload;
    return state = _states12;
  } else if (actionType === _action.actionTypes.SET_FETCH_COMPARE_DATA) {
    var _states13 = _objectSpread({}, state);

    _states13['fetchCompareData'] = actionPayload;
    return state = _states13;
  } else if (actionType === _action.actionTypes.SET_WISHLIST_COUNT) {
    var _states14 = _objectSpread({}, state);

    _states14['wishlistCount'] = actionPayload;
    return state = _states14;
  } else {
    return state;
  }
};

var _default = Reducer;
exports["default"] = _default;