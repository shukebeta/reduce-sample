import store from "./store"
import {addToCart, updateCart, deleteFromCart} from "./actions/cart-actions";

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(addToCart('Juice 3L', 1, 270));
// Update Cart
store.dispatch(updateCart('Flour 1kg', 5, 110));
// Delete from Cart
store.dispatch(deleteFromCart('Coffee 500gm'));
unsubscribe()
