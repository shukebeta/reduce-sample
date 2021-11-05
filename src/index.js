import { createStore, combineReducers } from "redux";

const product = (state=[], action) => {
    return state;
}
const initialShoppingCartState = {
    sku: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

const ADD_TO_CART = 'ADD_TO_CART'
const shoppingCart = (state=initialShoppingCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
           return { 
               ...state, 
               sku: [...state.sku, action.payload],
           }
        default: 
            return state
    }
}
const addToCart = (product, quantity, unitCost) => {
   return {
       type: ADD_TO_CART,
       payload: {product, quantity, unitCost}
   } 
}

const rootReducer = combineReducers({
    product,
    shoppingCart,
})

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(addToCart('Juice 3L', 1, 270));
unsubscribe()
