import constants from '~/public/static/data/my-constants/Constants';
import { actionTypes, productVarient } from './action';

export const initialState = {
    productVarient: null,
    placeOrderDetails: {},
    language:typeof window !== 'undefined' ? localStorage.getItem("language") : 'english',
    shopPageDataBy:null,
    navCartProudct:[],
    menuItems:[],
    allBrands:[],
    headerCats:[],
    updateNavbar:false,
    forgetPasswordEmaiId:null,
    proVarient:null,
    proPrimaryVarient:1,

    proPrimaryVarientId:null,
    proSecondaryVarientId:null,
    fetchCompareData:false,

    wishlistCount:0,

    changeLanguage:true,

    callrewardPointandPromocode:false,
    headerCategory:[],




};


let actionType = '';
let actionPayload = '';


const Reducer = (state = initialState, action) => {
    if (action !== undefined) {
        actionType = action.type;
        actionPayload = action.payload;
    }

    if (actionType === actionTypes.SET_CHANGE_LANGUAGE) {
        const states = { ...state };
        states['changeLanguage'] = !states['changeLanguage'];
        return (state = states);
    } 

    // if (actionType === actionTypes.SET_SHOP_PAGE_MIN_PRICE_RANGE) {
    //     const states = { ...state };
    //     states['shopPageMinPriceRange'] = actionPayload;
    //     return (state = states);
    // } 

    // if (actionType === actionTypes.SET_SHOP_PAGE_MAX_PRICE_RANGE) {
    //     const states = { ...state };
    //     states['shopPageMaxPriceRange'] = actionPayload;
    //     return (state = states);
    // } 

    if (actionType === actionTypes.PRODUCT_SLUG_VARIENT) {
        return (state = actionPayload);
    } 
    else if (actionType === actionTypes.ADD_PLACE_ORDER_DETAILS) {
        const states = { ...state };
        states['placeOrderDetails'] = actionPayload;
        return (state = states);
    }
    else if (actionType === actionTypes.SET_CALL_REWARDPOINT_PROMOCODE) {
        const states = { ...state };
        states['callrewardPointandPromocode'] = actionPayload;
        return (state = states);
    }
    else if (actionType === actionTypes.SET_LANGUAGE) {
        const states = { ...state };
        states['language'] = actionPayload;
        localStorage.setItem("language",actionPayload)
        return (state = states);
    } 
    else if (actionType === actionTypes.SET_SHOP_PAGE_DATA_BY) {
        const states = { ...state };
        states['shopPageDataBy'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes.SET_NAV_CART_PRODUCT) {
        const states = { ...state };
        states['navCartProudct'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes.SET_MENU_ITEMS) {
        const states = { ...state };
        states['menuItems'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes.SET_ALL_BRANDS) {
        const states = { ...state };
        states['allBrands'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes.SET_HEADER_CATS) {
        const states = { ...state };
        states['headerCats'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes. SET_UPDATE_NAVBAR) {
        const states = { ...state };
        states['updateNavbar'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes. SET_FORGET_PASSWORD_EMAIL) {
        const states = { ...state };
        states['forgetPasswordEmaiId'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes. SET_PRO_VARIENT) {
        const states = { ...state };
        states['proVarient'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes. SET_PRO_PRIMARY_VARIENT) {
        const states = { ...state };
        states['proPrimaryVarient'] = actionPayload;
        return (state = states);
    } 

    else if (actionType === actionTypes. SET_PRO_PRIMARY_VARIENT_ID) {
        const states = { ...state };
        states['proPrimaryVarientId'] = actionPayload;
        return (state = states);
    } else if (actionType === actionTypes. SET_PRO_SECONDARY_VARIENT_ID) {
        const states = { ...state };
        states['proSecondaryVarientId'] = actionPayload;
        return (state = states);
    } 
    else if (actionType === actionTypes. SET_FETCH_COMPARE_DATA) {
        const states = { ...state };
        states['fetchCompareData'] = actionPayload;
        return (state = states);
    } 

    else if (actionType === actionTypes. SET_WISHLIST_COUNT) {
        const states = { ...state };
        states['wishlistCount'] = actionPayload;
        return (state = states);
    } 

    else {
    return state;
    }

};
export default Reducer;
