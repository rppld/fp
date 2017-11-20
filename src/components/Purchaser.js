import React from "react"
import PropTypes from "prop-types"
import Spacer from "../components/Spacer"
import SizePicker from "../components/SizePicker"
import { connect } from "react-redux"

const mapStateToProps = ({ cartItems }) => {
  return { cartItems }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: obj =>
      dispatch({
        type: "ADD_TO_CART",
        payload: obj
      })
  }
}

const Purchaser = props => (
  <div className="pa4 pa5-xl">
    <Spacer />

    <h1 className="f2 mt0 mb3 b lh-title">Low Top Ghost White</h1>

    <p className="mb4 f4 f3-xl lh-copy">
      The down strap is shaped to match the lines of the sole. The use of
      premium materials gives the model a minimalistic yet elegant touch.
    </p>

    <div className="mb4">
      <p className="mb2 f6 i">Select your size:</p>
      <SizePicker />
    </div>

    <h2 className="f3 f2-xl mt0 mb4">
      <span className="">219&nbsp;€</span>
    </h2>

    <p className="">
      <button
        className="bn pa3 ph4 dim bg-dark-green br3 b pointer white"
        onClick={() => props.addToCart(props.lineItem)}
      >
        Add To Bag
      </button>
    </p>
  </div>
)

Purchaser.propTypes = {
  lineItem: PropTypes.object,
  addToCart: PropTypes.func,
  cartItems: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps, mapDispatchToProps)(Purchaser)
