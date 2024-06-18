import { ADD_TO_CART, REMOVE_FROM_CART } from "../contants";


export const setAddToCart = param => {
    return {
        type: ADD_TO_CART,
        payload: param,
    };
};


export const setRemoveFromCart = param => {
    return {
        type: REMOVE_FROM_CART,
        payload: param,
    };
};
