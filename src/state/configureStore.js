import { createStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.assign({}, state, {
        showCart: state.showCart ? null : true,
        cartItems: [...state.cartItems, action.payload]
      })
    case "TOGGLE_CART":
      return Object.assign({}, state, {
        showCart: !state.showCart
      })
    default:
      return state
  }
}

const initialState = {
  showCart: false,
  cartItems: []
}

/* eslint-disable no-underscore-dangle */
const configureStore = () =>
  process.env.NODE_ENV === "production"
    ? createStore(reducer, initialState)
    : createStore(
      reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
    )
/* eslint-enable */

export default configureStore
