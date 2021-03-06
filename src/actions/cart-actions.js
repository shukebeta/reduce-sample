export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = (product, quantity, unitCost) => {
    return {
        type: ADD_TO_CART,
        payload: {product, quantity, unitCost}
    }
}
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const updateCart = (product, quantity, unitCost) => {
    return {
        type: UPDATE_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export const deleteFromCart = (product) => {
    return {
        type: DELETE_FROM_CART,
        payload: {
            product
        }
    }
}
