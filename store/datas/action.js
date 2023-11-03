export const actionTypes = {
    PRODUCT_SLUG_VARIENT: ' PRODUCT_SLUG_VARIENT',
    ADD_PLACE_ORDER_DETAILS : 'ADD_PLACE_ORDER_DETAILS',
    SET_LANGUAGE : 'SET_LANGUAGE',
    SET_SHOP_PAGE_DATA_BY:" SET_SHOP_PAGE_DATA_BY",
    SET_NAV_CART_PRODUCT:" SET_NAV_CART_PRODUCT",
    SET_MENU_ITEMS:" SET_MENU_ITEMS",
    SET_ALL_BRANDS:" SET_ALL_BRANDS",
    SET_HEADER_CATS:" SET_HEADER_CATS",
    SET_UPDATE_NAVBAR:" SET_UPDATE_NAVBAR",
    SET_FORGET_PASSWORD_EMAIL:"SET_FORGET_PASSWORD_EMAIL",
    SET_PRO_VARIENT:"SET_PRO_VARIENT",
    SET_PRO_PRIMARY_VARIENT:" SET_PRO_PRIMARY_VARIENT",
    SET_PRO_SECONDARY_VARIENT_ID:"SET_PRO_SECONDARY_VARIENT_ID",
    SET_PRO_PRIMARY_VARIENT_ID:" SET_PRO_PRIMARY_VARIENT_ID",
    SET_FETCH_COMPARE_DATA:"SET_FETCH_COMPARE_DATA",
    SET_WISHLIST_COUNT:"SET_WISHLIST_COUNT",
    SET_CHANGE_LANGUAGE:"SET_CHANGE_LANGUAGE",
    SET_SHOP_PAGE_MAX_PRICE_RANGE:"SET_SHOP_PAGE_MAX_PRICE_RANGE",
    SET_SHOP_PAGE_MIN_PRICE_RANGE:"SET_SHOP_PAGE_MIN_PRICE_RANGE",
    SET_CALL_REWARDPOINT_PROMOCODE:"SET_CALL_REWARDPOINT_PROMOCODE",

};


export const productVarient = (data)=>{
    return {
        type:actionTypes.PRODUCT_SLUG_VARIENT,
        payload:data 
    }
}

// export const setShopPageMinPrice = (data)=>{
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

export const addPlaceOrderDatas = (data)=>{
    return {
        type:actionTypes.ADD_PLACE_ORDER_DETAILS,
        payload:data 
    }
}

export const callrewardPointandPromocodeApis = (data)=>{
    return {
        type:actionTypes.SET_CALL_REWARDPOINT_PROMOCODE,
        payload:data 
    }
}

export const setLanguage = (data)=>{
    localStorage.setItem("abbb","dfsfds")

    return {
        type:actionTypes.SET_LANGUAGE,
        payload:data 
    }
}

export const shopPageDataBy = (data)=>{
    return {
        type:actionTypes.SET_SHOP_PAGE_DATA_BY,
        payload:data 
    }
}

export const setNavCartProduct = (data)=>{
    return {
        type:actionTypes.SET_NAV_CART_PRODUCT,
        payload:data 
    }
}

export const setMenuItem = (data)=>{
    return {
        type:actionTypes.SET_MENU_ITEMS,
        payload:data 
    }
}
export const setAllBrands = (data)=>{
    return {
        type:actionTypes.SET_ALL_BRANDS,
        payload:data 
    }
}
export const setHeaderCats = (data)=>{
    return {
        type:actionTypes.SET_HEADER_CATS,
        payload:data 
    }
}
export const updateNavbar = (data)=>{
    return {
        type:actionTypes.SET_UPDATE_NAVBAR,
        payload:data 
    }
}

export const setForgetPasswordEmail = (data)=>{
    return {
        type:actionTypes.SET_FORGET_PASSWORD_EMAIL,
        payload:data 
    }
}

export const setProVarient = (data)=>{
    return {
        type:actionTypes.SET_PRO_VARIENT,
        payload:data 
    }
}

export const setProPrimaryVarient = (data)=>{
    return {
        type:actionTypes.SET_PRO_PRIMARY_VARIENT,
        payload:data 
    }
}

export const setProPrimaryVarientId = (data)=>{
    return {
        type:actionTypes.SET_PRO_PRIMARY_VARIENT_ID,
        payload:data 
    }
}

export const setProSecondaryVarientId = (data)=>{
    return {
        type:actionTypes.SET_PRO_SECONDARY_VARIENT_ID,
        payload:data 
    }
}

export const setfetchCompareData = (data)=>{
    return {
        type:actionTypes.SET_FETCH_COMPARE_DATA,
        payload:data 
    }
}

export const setWishlistCount = (data)=>{
    return {
        type:actionTypes.SET_WISHLIST_COUNT,
        payload:data 
    }
}

export const changeLanguage = (data)=>{
    return {
        type:actionTypes.SET_CHANGE_LANGUAGE,
        payload:data 
    }
}